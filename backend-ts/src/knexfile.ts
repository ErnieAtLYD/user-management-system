// Update with your config settings.

export = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'crud_management_system',
      user: 'root',
      password: 'password',
    },
  },

  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  },
};
