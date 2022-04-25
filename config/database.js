module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-3-223-213-207.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd32bok2ks9la3b'),
      user: env('DATABASE_USERNAME', 'lpisgjuhjwbzgd'),
      password: env('DATABASE_PASSWORD', 'ac9d92120c9ab3c6fd23cb4c6a48d851e5eba4e7d3578b8aa7a308e9abaa3ed5'),
      ssl: env.bool('DATABASE_SSL', false),
      ssl: {
        rejectUnauthorized: false
      },
    },
  },
});
