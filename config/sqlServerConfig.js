const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.SQLSERVER_DB_USER,
  password: process.env.SQLSERVER_DB_PASSWORD,
  server: process.env.SQLSERVER_DB_SERVER,
  database: process.env.SQLSERVER_DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true
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
