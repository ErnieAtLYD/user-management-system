// so locally, NODE_ENV is undefined so it'll be development
// BUT in Heroku, NODE_ENV already returns 'production', so
// now Knex will know which configuration setting to load.
const env = process.env.NODE_ENV || 'development';

// previously, this was const configs = require('./knexfile')['development'];
const configs = require('./knexfile')[env];
const knex = require('knex');
const connection = knex(configs);

module.exports = connection;
