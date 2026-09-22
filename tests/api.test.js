import request from 'supertest';
import app from '../server/index.js';

describe('MOR Radio API', () => {
  describe('Health endpoints', () => {
    test('GET /health returns ok status', async () => {
      const res = await request(app)
        .get('/health')
        .expect(200);
      
      expect(res.body.status).toBe('ok');
      expect(res.body.timestamp).toBeDefined();
      expect(res.body.uptime).toBeGreaterThan(0);
      expect(res.body.dependencies).toBeDefined();
    });

    test('GET /ready returns ready status', async () => {
      const res = await request(app)
        .get('/ready')
        .expect(200);
      
      expect(res.body.status).toBe('ready');
    });
  });

  describe('Podcasts API', () => {
    test('GET /wp-json/podcasts returns all podcasts', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBe(4);
      expect(res.body.meta.total).toBe(4);
    });

    test('GET /wp-json/podcasts supports pagination', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts?limit=2&offset=1')
        .expect(200);
      
      expect(res.body.data.length).toBe(2);
      expect(res.body.meta.offset).toBe(1);
      expect(res.body.meta.limit).toBe(2);
    });

    test('GET /wp-json/podcasts supports search', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts?search=design')
        .expect(200);
      
      expect(res.body.data.length).toBe(1);
      expect(res.body.data[0].slug).toBe('designing-your-world');
    });

    test('GET /wp-json/podcasts/:slug returns single podcast', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts/designing-your-world')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data.slug).toBe('designing-your-world');
      expect(res.body.data.title).toBe('Designing Your World');
    });

    test('GET /wp-json/podcasts/:slug returns 404 for unknown', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts/unknown-podcast')
        .expect(404);
      
      expect(res.body.error).toBe('Podcast not found');
    });

    test('GET /wp-json/podcasts?slug=... also works (legacy query param)', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts?slug=the-art-of-living')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data.slug).toBe('the-art-of-living');
    });
  });

  describe('Seasons API', () => {
    test('GET /wp-json/seasons returns all seasons', async () => {
      const res = await request(app)
        .get('/wp-json/seasons')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data.length).toBe(2);
    });

    test('GET /wp-json/seasons/:slug returns single season', async () => {
      const res = await request(app)
        .get('/wp-json/seasons/unknown-realms')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data.slug).toBe('unknown-realms');
      expect(res.body.data.episodes.length).toBe(2);
    });

    test('GET /wp-json/seasons/:slug returns 404 for unknown', async () => {
      const res = await request(app)
        .get('/wp-json/seasons/unknown-season')
        .expect(404);
      
      expect(res.body.error).toBe('Season not found');
    });
  });

  describe('Hosts API', () => {
    test('GET /wp-json/hosts returns all hosts', async () => {
      const res = await request(app)
        .get('/wp-json/hosts')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data.length).toBe(5);
    });

    test('GET /wp-json/hosts/:id returns single host', async () => {
      const res = await request(app)
        .get('/wp-json/hosts/opeyemi-gbadebo')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('opeyemi-gbadebo');
      expect(res.body.data.name).toBe('Opeyemi Gbadebo');
    });

    test('GET /wp-json/hosts/:id returns 404 for unknown', async () => {
      const res = await request(app)
        .get('/wp-json/hosts/unknown-host')
        .expect(404);
      
      expect(res.body.error).toBe('Host not found');
    });
  });

  describe('Security headers', () => {
    test('Health endpoint includes security headers', async () => {
      const res = await request(app)
        .get('/health')
        .expect(200);
      
      expect(res.headers['x-content-type-options']).toBe('nosniff');
      expect(res.headers['x-frame-options']).toBe('DENY');
    });
  });

  describe('Rate limiting', () => {
    test('Rate limit headers present on API responses', async () => {
      const res = await request(app)
        .get('/wp-json/podcasts')
        .expect(200);
      
      expect(res.headers['ratelimit-limit']).toBeDefined();
      expect(res.headers['ratelimit-remaining']).toBeDefined();
    });
  });

  describe('Error handling', () => {
    test('404 for unknown routes', async () => {
      const res = await request(app)
        .get('/wp-json/unknown')
        .expect(404);
      
      expect(res.body.error).toBe('Not found');
    });

    test('Admin paths return 403', async () => {
      const res = await request(app)
        .get('/wp-admin/')
        .expect(403);
      
      expect(res.body.error).toBe('Forbidden');
    });
  });
});