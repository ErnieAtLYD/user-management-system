// see: https://dev.to/asteinarson/typescript-node-js-importing-knex-into-es6-module-1poc
import knex, { Knex } from 'knex';
import knexfile from './knexfile';

// so locally, NODE_ENV is undefined so it'll be development
// BUT in Heroku, NODE_ENV already returns 'production', so
// now Knex will know which configuration setting to load.
const env = process.env.NODE_ENV || 'development';

const config: Knex.Config = knexfile[env];
const db: Knex = knex(config);

export default db;
