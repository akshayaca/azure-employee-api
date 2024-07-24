const sql = require('mssql');
require('dotenv').config();

const connectionString = process.env.DefaultConnection;
const config = {
  connectionString: connectionString,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: false // Ensure this matches your needs
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
