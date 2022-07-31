module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b21e4074152acd8f5c8fe522d5719a4a'),
  },
});
