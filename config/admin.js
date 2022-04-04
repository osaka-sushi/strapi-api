module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77af77eecb6a8d36dd9ede365b430578'),
  },
});
