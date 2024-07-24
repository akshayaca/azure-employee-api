const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: false // Add this line if you haven't already
  }
};

const connection = new sql.ConnectionPool(config)
  .connect()
  .then(conn => {
    console.log('Connected to SQL Server');
    return conn;
  })
  .catch(err => {
    console.log('Database Connection Failed! Bad Config: ', err);
    throw err;
  });

module.exports = {
  sql, connection
};
