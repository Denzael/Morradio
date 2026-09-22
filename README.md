# MOR Radio — Modern Digital Radio Platform

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-18%2F18%20passing-brightgreen.svg)]()
[![Lint](https://img.shields.io/badge/ESLint-passing-brightgreen.svg)]()

> **MOR Radio** — A production-ready Node.js application serving the official MOR Radio digital platform. Built from the WordPress SoundSphere theme mirror, now running as a standalone Express application with full API, static asset serving, and modern tooling.

---

## 🎯 Overview

MOR Radio is a digital radio platform streaming African music, culture, and conversation from Willenhall, West Midlands. This application serves as the **official website backend**, replacing the WordPress-dependent prototype with a modern, maintainable Node.js stack.

### Key Features

| Category | Features |
|----------|----------|
| **Audio Streaming** | Live radio player, on-demand podcast episodes, MP3/HLS support |
| **Content Management** | Podcasts, Seasons, Hosts — RESTful API with pagination & search |
| **Frontend** | Original SoundSphere WordPress theme (351 pages) served as static assets |
| **API** | `/wp-json/*` endpoints compatible with WordPress REST API clients |
| **Security** | Admin path blocking (403), rate limiting, security headers, CORS |
| **Observability** | Health/readiness probes, structured logging, graceful shutdown |
| **Testing** | 18 integration tests (Jest + Supertest) |
| **Code Quality** | ESLint flat config, zero warnings/errors |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.x (LTS recommended)
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Denzael/Morradio.git
cd Morradio

# Install dependencies
npm ci

# Start development server (with file watching)
npm run dev

# Or start production server
npm start
```

### Access Points

| Endpoint | Description |
|----------|-------------|
| `http://localhost:3000/` | Homepage (SoundSphere theme) |
| `http://localhost:3000/health` | Health check (JSON) |
| `http://localhost:3000/ready` | Readiness probe (JSON) |
| `http://localhost:3000/wp-json/podcasts` | Podcasts API |
| `http://localhost:3000/wp-json/seasons` | Seasons API |
| `http://localhost:3000/wp-json/hosts` | Hosts API |

---

## 📁 Project Structure

```
morradio-app/
├── public/                      # Static assets (WordPress mirror)
│   ├── index.html              # Homepage
│   ├── wp-content/
│   │   ├── themes/soundsphere/ # SoundSphere theme CSS/JS
│   │   ├── plugins/            # qi-blocks, soundsphere-core, etc.
│   │   └── uploads/            # Media (images, audio)
│   ├── podcasts/               # Podcast pages
│   ├── hosts/                  # Host pages
│   ├── schedule/               # Schedule page
│   └── ...                     # 351 total HTML pages
├── routes/
│   ├── api.js                  # REST API endpoints
│   └── static.js               # Static file routing + legacy redirects
├── server/
│   └── index.js                # Express app + middleware
├── tests/
│   └── api.test.js             # 18 integration tests
├── frontend/                   # Next.js modern frontend (optional)
├── eslint.config.mjs           # ESLint flat configuration
├── jest.config.js              # Jest configuration
├── Dockerfile                  # Multi-stage production build
├── package.json
└── README.md
```

---

## 🔌 API Reference

### Base URL
```
http://localhost:3000/wp-json
```

### Podcasts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/podcasts` | List all podcasts (supports `?limit=&offset=&search=`) |
| `GET` | `/podcasts/:slug` | Get single podcast by slug |
| `GET` | `/podcasts?slug=:slug` | Legacy query param support |

**Response Example:**
```json
{
  "success": true,
  "data": [{
    "id": "designing-your-world",
    "slug": "designing-your-world",
    "title": "Designing Your World",
    "description": "Creative living & design thinking",
    "duration": "30 min",
    "image": "/assets/images/podcast-designing-your-world.jpg",
    "audioUrl": "/assets/audio/b-audio-everytings-nice.mp3"
  }],
  "meta": { "total": 4, "offset": 0, "limit": 4 }
}
```

### Seasons

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/seasons` | List all seasons |
| `GET` | `/seasons/:slug` | Get season with episodes |

### Hosts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/hosts` | List all hosts |
| `GET` | `/hosts/:id` | Get single host by ID |

### Health & Monitoring

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Liveness probe — returns status, uptime, memory, dependencies |
| `GET` | `/ready` | Readiness probe — returns `{ "status": "ready" }` |

---

## 🛡️ Security

### Blocked Paths (403 Forbidden)
```
/wp-admin/
/wp-login.php
/wp-content/
/wp-includes/
/xmlrpc.php
```

### Rate Limiting
- **API** (`/wp-json/*`): 100 requests/minute per IP
- **Health** (`/health`, `/ready`): 60 requests/minute per IP

### Security Headers (via Helmet)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

**Test Coverage:** 18 integration tests covering:
- Health endpoints (2)
- Podcasts API (6)
- Seasons API (3)
- Hosts API (3)
- Security headers (1)
- Rate limiting (1)
- Error handling (2)

---

## 🔧 Code Quality

```bash
# Lint all files
npm run lint

# Auto-fix linting issues
npm run lint -- --fix
```

**ESLint Config:** Flat config (`eslint.config.mjs`) with:
- ES2022 + Node.js globals
- Modern import/export rules
- No unused vars (except underscore-prefixed)

---

## 🐳 Docker Deployment

```bash
# Build image
docker build -t morradio:latest .

# Run container
docker run -d -p 3000:3000 --name morradio morradio:latest

# Health check included in Dockerfile
```

**Dockerfile Features:**
- Multi-stage build (builder → runner)
- Non-root user (`nodejs:nodejs`)
- Production dependencies only
- Built-in health check (`/health`)

---

## 📦 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `node server/index.js` | Production server |
| `dev` | `node --watch server/index.js` | Development with auto-reload |
| `test` | `jest` | Run integration tests |
| `lint` | `eslint .` | Lint codebase |

---

## 🌐 Frontend Theme

The application serves the **SoundSphere WordPress theme** as static assets:

- **Theme:** SoundSphere (by Elated Themes / Qode Interactive)
- **Pages:** 351 HTML pages from HTTrack mirror
- **Assets:** CSS, JS, fonts, images, audio served from `public/wp-content/`
- **CSS Variables:** `--qode-main-color`, `--qode-background-color`, `--qode-header-height`, etc.

### Key Theme Files
```
public/wp-content/themes/soundsphere/
├── style03db.css              # Theme header (minimal)
├── assets/
│   ├── css/main.min03db.css   # 377KB compiled theme CSS
│   └── js/main.min03db.js     # Theme JavaScript
```

---

## 🔄 Legacy URL Redirects (SEO)

The application preserves SEO by redirecting old WordPress URLs:

| Legacy Path | Redirects To |
|-------------|--------------|
| `/podcast-item/*` | `/podcasts/` |
| `/podcast-season/*` | `/seasons/` |
| `/meet-your-hosts/` | `/hosts/` |
| `/about-us/` | `/about/` |
| `/our-schedule/` | `/schedule/` |
| `/contact-us/` | `/contact/` |
| `/wp-login.php` | `/login` |

All redirects are **301 Permanent**.

---

## 📊 Monitoring & Observability

### Health Check Response
```json
{
  "status": "ok",
  "timestamp": "2026-09-22T17:52:23.098Z",
  "uptime": 85.28,
  "memory": {
    "rss": 78565376,
    "heapTotal": 15806464,
    "heapUsed": 12643968
  },
  "version": "v18.20.0",
  "dependencies": {
    "filesystem": "ok",
    "staticAssets": "ok"
  }
}
```

### Graceful Shutdown
- Handles `SIGTERM` / `SIGINT`
- Stops accepting new connections
- Waits for in-flight requests (10s timeout)
- Force-exits if timeout exceeded

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make changes with tests
4. Run `npm test && npm run lint`
5. Commit (`git commit -m 'Add amazing feature'`)
6. Push (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- **SoundSphere Theme** — Elated Themes / Qode Interactive
- **Original Content** — MOR Radio team (Willenhall, West Midlands)
- **HTTrack** — Website mirroring for theme extraction
- **Open Source** — Express, Jest, ESLint, Helmet, and the Node.js community

---

## 📞 Support

- **Repository:** https://github.com/Denzael/Morradio
- **Issues:** GitHub Issues tab
- **Contact:** MOR Radio team

---

**Built with ❤️ for the MOR Radio community**