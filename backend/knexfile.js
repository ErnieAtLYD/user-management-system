// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'user_management_system',
      user: 'root',
      password: 'password',
    },
  },

  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  },
};
