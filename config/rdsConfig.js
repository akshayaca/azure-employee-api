const mysql = require('mysql2/promise');
require('dotenv').config();

const mysqlConfig = {
  host: process.env.MYSQL_DB_HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_DATABASE,
  port: process.env.MYSQL_DB_PORT || 3306,
  ssl: process.env.MYSQL_DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
};

async function createMySqlConnection() {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    console.log('Connected to MySQL');
    return connection;
  } catch (err) {
    console.log('Database Connection Failed! Bad Config: ', err);
    throw err;
  }
}

module.exports = { createMySqlConnection };
