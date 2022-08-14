const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', process.env.REACT_APP_DATABASE_HOST),
      port: env.int('DATABASE_PORT', process.env.REACT_APP_DATABASE_PORT),
      database: env('DATABASE_NAME', process.env.REACT_APP_DATABASE_NAME),
      user: env('DATABASE_USERNAME', process.env.REACT_APP_DATABASE_USERNAME),
      password: env('DATABASE_PASSWORD', process.env.REACT_APP_DATABASE_PASSWORD),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    options: {
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
  },
});
