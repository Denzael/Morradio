import express from 'express';

const router = express.Router();

/**
 * MOR Radio API Routes
 * RESTful API endpoints for podcasts, seasons, and hosts
 * Native implementation
 */

// Data structures - frozen to prevent accidental mutation
const podcasts = Object.freeze([
  {
    id: 'designing-your-world',
    slug: 'designing-your-world',
    title: 'Designing Your World',
    description: 'Creative living & design thinking',
    duration: '30 min',
    image: '/assets/images/podcast-designing-your-world.jpg',
    audioUrl: '/assets/audio/b-audio-everytings-nice.mp3',
  },
  {
    id: 'the-art-of-living',
    slug: 'the-art-of-living',
    title: 'The Art of Living',
    description: 'Philosophy & life wisdom',
    duration: '30 min',
    image: '/assets/images/podcast-the-art-of-living.jpg',
    audioUrl: '/assets/audio/B-Audio-Everything-Nice.mp3',
  },
  {
    id: 'broadcast-buzz',
    slug: 'broadcast-buzz',
    title: 'Broadcast Buzz',
    description: 'Media/broadcasting industry',
    duration: '30 min',
    image: '/assets/images/podcast-broadcast-buzz.jpg',
    audioUrl: '/assets/audio/Josh-Woodward-Gravity-1.mp3',
  },
  {
    id: 'brushstrokes-beats',
    slug: 'brushstrokes-beats',
    title: 'Brushstrokes & Beats',
    description: 'Art & music fusion',
    duration: '30 min',
    image: '/assets/images/podcast-brushstrokes-beats.jpg',
    audioUrl: '/assets/audio/Fingers-In-The-Noise-Elixir-1.mp3',
  },
]);

const seasons = Object.freeze([
  {
    id: 'unknown-realms',
    slug: 'unknown-realms',
    title: 'Unknown Realms',
    description: 'Entertainment/Playlist season',
    episodes: Object.freeze([
      {
        id: 's8-e01',
        title: 'Journey Through Jazz',
        duration: '30 min',
        image: '/assets/images/season-unknown-realms-e01.jpg',
      },
      {
        id: 's8-e02',
        title: 'Designing Your World',
        duration: '30 min',
        image: '/assets/images/season-unknown-realms-e02.jpg',
      },
    ]),
  },
  {
    id: 'sonic-stories',
    slug: 'sonic-stories',
    title: 'Sonic Stories',
    description: 'Peter Onalaja interview series',
    episodes: Object.freeze([
      {
        id: 's4-e04',
        title: 'Crossroads of Identity',
        duration: '30 min',
        image: '/assets/images/season-sonic-stories-e04.jpg',
      },
      {
        id: 's4-e06',
        title: 'Cultural Footprints',
        duration: '30 min',
        image: '/assets/images/season-sonic-stories-e06.jpg',
      },
    ]),
  },
]);

const hosts = Object.freeze([
  {
    id: 'opeyemi-gbadebo',
    name: 'Opeyemi Gbadebo',
    role: 'Main host/presenter',
    bio: 'Lead presenter of MOR Radio, known for engaging storytelling and community connection.',
  },
  {
    id: 'jessica-olayinka',
    name: 'Miss Jessica Olayinka',
    role: 'Gist and Giggle host',
    bio: 'Host of the entertaining and lifestyle-focused Gist and Giggle show.',
  },
  {
    id: 'peter-onalaja',
    name: 'Mr Peter Onalaja',
    role: 'Culture & Identity discussions',
    bio: 'Host of L.A.P. (Local African Professionals) focusing on professional networking.',
  },
  {
    id: 'walter-eze',
    name: 'Walter Eze',
    role: 'Business & Entrepreneurship',
    bio: 'Host of The Enterprise Mindset and Defeating Limited Belief.',
  },
  {
    id: 'a-cheampong',
    name: 'Isaac Acheampong',
    role: 'Local African Professionals (L.A.P.)',
    bio: 'Host of A Time with the Local African Professionals.',
  },
]);

/**
 * Helper: Find item by slug or id from params or query
 * Supports both RESTful params (/podcasts/:slug) and query (?slug=)
 */
function findBySlugOrId(collection, req) {
  const identifier = req.params.slug || req.params.id || req.query.slug || req.query.id;
  if (!identifier) {return null;}
  return collection.find(item => item.slug === identifier || item.id === identifier);
}

/**
 * Helper: Standard success response
 */
function successResponse(data, meta = {}) {
  return { success: true, data, meta };
}

/**
 * Helper: Standard error response
 */
function errorResponse(message, status = 404, details = {}) {
  const err = new Error(message);
  err.status = status;
  err.details = details;
  return err;
}

/**
 * GET /podcasts
 * List all podcasts with optional filtering
 * Supports legacy ?slug= for single item lookup
 */
router.get('/podcasts', (req, res, next) => {
  try {
    const { limit, offset, search, slug } = req.query;
    
    // Legacy support: ?slug= for single item
    if (slug) {
      const podcast = podcasts.find(p => p.slug === slug || p.id === slug);
      if (!podcast) {
        throw errorResponse('Podcast not found', 404, { slug });
      }
      return res.json(successResponse(podcast));
    }

    let results = [...podcasts];

    if (search) {
      const query = search.toLowerCase();
      results = results.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query),
      );
    }

    const total = results.length;
    const start = parseInt(offset, 10) || 0;
    const max = parseInt(limit, 10) || total;
    results = results.slice(start, start + max);

    res.json(successResponse(results, { total, offset: start, limit: max }));
  } catch (err) {
    next(err);
  }
});

/**
 * GET /podcasts/:slug
 * Get single podcast by slug or id
 */
router.get('/podcasts/:slug', (req, res, next) => {
  try {
    const podcast = findBySlugOrId(podcasts, req);
    if (!podcast) {
      throw errorResponse('Podcast not found', 404, { slug: req.params.slug });
    }
    res.json(successResponse(podcast));
  } catch (err) {
    next(err);
  }
});

/**
 * GET /seasons
 * List all seasons
 */
router.get('/seasons', (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    let results = [...seasons];

    const total = results.length;
    const start = parseInt(offset, 10) || 0;
    const max = parseInt(limit, 10) || total;
    results = results.slice(start, start + max);

    res.json(successResponse(results, { total, offset: start, limit: max }));
  } catch (err) {
    next(err);
  }
});

/**
 * GET /seasons/:slug
 * Get single season by slug or id
 */
router.get('/seasons/:slug', (req, res, next) => {
  try {
    const season = findBySlugOrId(seasons, req);
    if (!season) {
      throw errorResponse('Season not found', 404, { slug: req.params.slug });
    }
    res.json(successResponse(season));
  } catch (err) {
    next(err);
  }
});

/**
 * GET /hosts
 * List all hosts
 */
router.get('/hosts', (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    let results = [...hosts];

    const total = results.length;
    const start = parseInt(offset, 10) || 0;
    const max = parseInt(limit, 10) || total;
    results = results.slice(start, start + max);

    res.json(successResponse(results, { total, offset: start, limit: max }));
  } catch (err) {
    next(err);
  }
});

/**
 * GET /hosts/:id
 * Get single host by id
 */
router.get('/hosts/:id', (req, res, next) => {
  try {
    const host = findBySlugOrId(hosts, req);
    if (!host) {
      throw errorResponse('Host not found', 404, { id: req.params.id });
    }
    res.json(successResponse(host));
  } catch (err) {
    next(err);
  }
});

/**
 * Health check endpoint
 */
router.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'morradio-api',
    version: '1.0.0',
  });
});

console.log('MOR Radio API routes configured');

export default router;