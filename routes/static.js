import express from 'express';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

/**
 * Static file routing for MOR Radio
 * Serves the official frontend assets
 * Clean application routes with legacy URL redirects for SEO
 */

// Application route mappings (clean URLs -> static files)
const routeMappings = {
  // Home
  '/': '/index.html',
  
  // Podcasts
  '/podcasts': '/podcasts/index.html',
  '/podcasts/designing-your-world': '/podcasts/designing-your-world/index.html',
  '/podcasts/the-art-of-living': '/podcasts/the-art-of-living/index.html',
  '/podcasts/broadcast-buzz': '/podcasts/broadcast-buzz/index.html',
  '/podcasts/brushstrokes-beats': '/podcasts/brushstrokes-beats/index.html',
  
  // Seasons
  '/seasons': '/seasons/index.html',
  '/seasons/unknown-realms': '/seasons/unknown-realms/index.html',
  '/seasons/sonic-stories': '/seasons/sonic-stories/index.html',
  
  // Hosts
  '/hosts': '/hosts/index.html',
  '/hosts/opeyemi-gbadebo': '/hosts/opeyemi-gbadebo/index.html',
  '/hosts/jessica-olayinka': '/hosts/jessica-olayinka/index.html',
  '/hosts/peter-onalaja': '/hosts/peter-onalaja/index.html',
  '/hosts/walter-eze': '/hosts/walter-eze/index.html',
  '/hosts/a-cheampong': '/hosts/a-cheampong/index.html',
  
  // Pages
  '/about': '/about/index.html',
  '/about/team': '/about/team/index.html',
  '/about/mission': '/about/mission/index.html',
  '/schedule': '/schedule/index.html',
  '/contact': '/contact/index.html',
  '/donate': '/donate/index.html',
  '/blog': '/blog/index.html',
  '/shop': '/shop/index.html',
};

/**
 * Resolve a clean route to a static file path
 */
function resolveStaticFile(cleanPath) {
  // Direct mapping
  if (routeMappings[cleanPath]) {
    return routeMappings[cleanPath];
  }
  
  // Try with trailing slash removed
  const withoutSlash = cleanPath.replace(/\/$/, '');
  if (withoutSlash !== cleanPath && routeMappings[withoutSlash]) {
    return routeMappings[withoutSlash];
  }
  
  // Try as directory with index.html
  return `${cleanPath}/index.html`;
}

/**
 * SECURITY: Explicit 403 for admin/CMS paths (MUST BE FIRST)
 * These must be registered before any catch-all handlers
 */
['/wp-admin', '/wp-login', '/wp-content', '/wp-includes', '/xmlrpc.php'].forEach(path => {
  router.use(path, (req, res) => {
    res.status(403).json({ 
      error: 'Forbidden', 
      message: 'Admin paths are not accessible',
      timestamp: new Date().toISOString(),
    });
  });
});

/**
 * Legacy URL redirects for SEO
 * Redirect old URLs to new clean URLs (301 permanent)
 */
const legacyRedirects = {
  '/podcast-item/': '/podcasts/',
  '/podcast-season/': '/seasons/',
  '/podcast-list/': '/podcasts/',
  '/podcast-list-dark/': '/podcasts/',
  '/about-us/': '/about/',
  '/who-we-are-2/': '/about/team',
  '/what-we-do-2/': '/about/mission',
  '/meet-your-hosts/': '/hosts/',
  '/our-schedule/': '/schedule/',
  '/donate/': '/donate/',
  '/contact-us/': '/contact/',
  '/shop/': '/shop/',
  '/blog/': '/blog/',
  '/wp-login.php': '/login',
  '/wp-admin/': '/admin',
};

router.use((req, res, next) => {
  // Check for legacy URL redirects
  for (const [legacyPath, newPath] of Object.entries(legacyRedirects)) {
    if (req.path.startsWith(legacyPath)) {
      const newUrl = req.path.replace(legacyPath, newPath);
      console.log(`Legacy URL redirect: ${req.path} -> ${newUrl}`);
      return res.redirect(301, newUrl);
    }
  }
  next();
});

/**
 * Main static file handler
 * Serves mapped routes or falls back to SPA index.html
 */
router.use((req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/') || req.path.startsWith('/wp-json/')) {
    return next();
  }
  
  // Skip asset requests (handled by express.static in main server)
  if (/\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot|mp3|mp4|webm|pdf|json|xml|txt|map)$/i.test(req.path)) {
    return next();
  }
  
  const cleanPath = req.path === '/' ? '/' : req.path.replace(/\/$/, '');
  const staticPath = resolveStaticFile(cleanPath);
  const fullPath = join(__dirname, '..', 'public', staticPath);
  
  // Use dynamic import for fs/promises to avoid blocking
  import('fs/promises').then(async (fs) => {
    try {
      await fs.access(fullPath, fs.constants.R_OK);
      return res.sendFile(fullPath);
    } catch {
      // Not found - try index.html for SPA fallback
    }
    
    // SPA fallback - serve main index.html for client-side routing
    const indexPath = join(__dirname, '..', 'public', 'index.html');
    try {
      await fs.access(indexPath, fs.constants.R_OK);
      return res.sendFile(indexPath);
    } catch {
      return res.status(404).json({ 
        error: 'Page not found', 
        path: req.path,
        timestamp: new Date().toISOString(),
      });
    }
  }).catch(() => {
    res.status(500).json({ 
      error: 'Internal server error',
      timestamp: new Date().toISOString(),
    });
  });
});

console.log('Static file routing configured for MOR Radio');

export default router;