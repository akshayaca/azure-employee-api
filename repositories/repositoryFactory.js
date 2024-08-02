const EmployeeRepositorySQL = require('./employeeRepositorySQL');
const EmployeeRepositoryMySQL = require('./employeeRepositoryMySQL');
const dbType = process.env.DB_TYPE;

let employeeRepository;

if (dbType === 'SQLSERVER') {
  employeeRepository = new EmployeeRepositorySQL();
} else if (dbType === 'MYSQL') {
  employeeRepository = new EmployeeRepositoryMySQL();
} else {
  throw new Error('Invalid DB_TYPE. Must be either "SQLSERVER" or "MYSQL".');
}

module.exports = employeeRepository;
