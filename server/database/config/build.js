const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./conection');

// eslint-disable-next-line no-unused-vars
const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'data.sql')).toString();
  return connection.query(sql);
};

module.exports = { dbBuild };
