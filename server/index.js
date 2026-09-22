import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Import route handlers
import apiRoutes from '../routes/api.js';
import staticRoutes from '../routes/static.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = join(__dirname, '..', 'public');
const NODE_ENV = process.env.NODE_ENV || 'development';

// Trust proxy for rate limiting behind reverse proxy
app.set('trust proxy', 1);

// Middleware
app.use(helmet({
  contentSecurityPolicy: NODE_ENV === 'production' ? {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
      imgSrc: ["'self'", 'data:', 'https:'],
      mediaSrc: ["'self'", 'https:'],
      connectSrc: ["'self'"],
      frameAncestors: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
    },
  } : false,
  crossOriginEmbedderPolicy: false,
  hsts: NODE_ENV === 'production' ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
  frameguard: { action: 'deny' },
}));
app.use(compression());
app.use(cors({
  origin: NODE_ENV === 'production' ? process.env.ALLOWED_ORIGINS?.split(',') || false : true,
  credentials: true,
}));
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/wp-json', apiLimiter);

// Health check endpoint with dependency checks - MUST be before staticRoutes
app.get('/health', async (req, res) => {
  const checks = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.version,
    dependencies: {
      filesystem: 'ok',
      staticAssets: 'ok',
    },
  };

  try {
    const fs = await import('fs/promises');
    await fs.access(PUBLIC_DIR, fs.constants.R_OK);
  } catch {
    checks.dependencies.filesystem = 'degraded';
    checks.status = 'degraded';
  }

  const criticalAssets = ['index.html'];
  for (const asset of criticalAssets) {
    try {
      const fs = await import('fs/promises');
      await fs.access(join(PUBLIC_DIR, asset), fs.constants.R_OK);
    } catch {
      checks.dependencies.staticAssets = 'degraded';
      checks.status = 'degraded';
    }
  }

  const statusCode = checks.status === 'ok' ? 200 : 503;
  res.status(statusCode).json(checks);
});

// Readiness probe
app.get('/ready', (req, res) => {
  res.json({ status: 'ready', timestamp: new Date().toISOString() });
});

// Static routes (admin path protection) - MUST come before express.static
app.use(staticRoutes);

// Serve static files from public directory
app.use(express.static(PUBLIC_DIR, {
  maxAge: NODE_ENV === 'production' ? '1y' : '0',
  etag: true,
  lastModified: true,
  immutable: NODE_ENV === 'production',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.webmanifest')) {
      res.setHeader('Content-Type', 'application/manifest+json');
    }
    if (filePath.endsWith('.mp3')) {
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Content-Type', 'audio/mpeg');
    }
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
  },
}));

// API routes
app.use('/wp-json', apiRoutes);

// Catch-all: serve index.html for SPA-like routing
app.use((req, res, next) => {
  const isAsset = /\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot|mp3|mp4|webm|pdf|json|xml|txt)$/i.test(req.path);
  const isApi = req.path.startsWith('/wp-json/') || req.path.startsWith('/api/');

  if (isApi || isAsset) {
    return next();
  }

  let filePath = req.path;
  if (filePath.endsWith('/') && filePath !== '/') {
    filePath = filePath.slice(0, -1);
  }

  const staticFile = join(PUBLIC_DIR, filePath, 'index.html');
  const staticFileDirect = join(PUBLIC_DIR, filePath + '.html');

  import('fs/promises').then(async (fs) => {
    try {
      await fs.access(staticFile, fs.constants.R_OK);
      return res.sendFile(staticFile);
    } catch {
      // Try direct .html file
    }
    try {
      await fs.access(staticFileDirect, fs.constants.R_OK);
      return res.sendFile(staticFileDirect);
    } catch {
      res.sendFile(join(PUBLIC_DIR, 'index.html'));
    }
  }).catch(() => {
    res.sendFile(join(PUBLIC_DIR, 'index.html'));
  });
});

// 404 handler - must be before error handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not found', 
    path: req.path,
    timestamp: new Date().toISOString(),
  });
});

// Error handler - only for actual errors (5xx)
app.use((err, req, res, next) => {
  // If response already sent, delegate to default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  const isDevelopment = NODE_ENV === 'development';
  const statusCode = err.status || 500;
  
  console.error('Server error:', {
    message: err.message,
    stack: isDevelopment ? err.stack : undefined,
    path: req.path,
    method: req.method,
    ip: req.ip,
    timestamp: new Date().toISOString(),
  });

  res.status(statusCode).json({ 
    error: statusCode === 500 && !isDevelopment ? 'Internal server error' : err.message,
    timestamp: new Date().toISOString(),
  });
});

// Only start server if not in test environment
let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  MOR Radio - Unified Application Server                  ║
║  Running on http://localhost:${PORT}                          ║
║  Environment: ${NODE_ENV}                                    ║
║                                                          ║
║  Static files: ${PUBLIC_DIR}                    ║
║  API endpoints: /wp-json/*                               ║
╚════════════════════════════════════════════════════════════╝
    `);
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    console.log(`${signal} received, starting graceful shutdown...`);
    
    server.close((err) => {
      if (err) {
        console.error('Error during server close:', err);
        process.exit(1);
      }
      console.log('HTTP server closed');
      process.exit(0);
    });

    setTimeout(() => {
      console.error('Forced shutdown after timeout');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    shutdown('uncaughtException');
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection at:', promise, 'reason:', reason);
    shutdown('unhandledRejection');
  });
}

export { app, server };
export default app;