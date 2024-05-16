module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        "http://localhost",
        "https://localhost:3000",
        "http://wrestlingtournaments.com",
        'https://take8.vercel.app',
        'https://strapi-production-213e.up.railway.app',
        '*'

      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "x-requested-with", // Add x-requested-with header
      ],
      keepHeaderOnError: true,
    }, 
  },*/
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ["http://localhost:3000",
        "http://localhost:1337",
        "http://localhost",
        "https://localhost:3000",
        "http://wrestlingtournaments.com",
        'https://take8.vercel.app',
        'https://strapi-production-213e.up.railway.app',
        '*']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
