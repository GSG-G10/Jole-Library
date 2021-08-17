require('env2')('./config.env');
const { Pool } = require('pg');

// let dbUrl = '';
// const {
//   NODE_ENV, DB_DEV_URL, DB_URL, TEST_DB_URL,
// } = process.env;

// switch (NODE_ENV) {
//   case 'production':
//     dbUrl = DB_URL;
//     break;
//   case 'development':
//     dbUrl = DB_DEV_URL;
//     break;
//   case 'test':
//     dbUrl = TEST_DB_URL;
//     break;
//   default:
//     throw new Error('NO DATABASE to show!');
// }

const options = {
//   connectionString: dbUrl,
  connectionString: process.env.DB_DEV_URL,
  ssl: false,
};

module.exports = new Pool(options);
