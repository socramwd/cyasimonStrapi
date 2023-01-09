module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd5qrp6n6mprs1p06dqg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_wwxd'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'xNqGq1I045GQSGKK99vZWKQCKILwH6VM'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
