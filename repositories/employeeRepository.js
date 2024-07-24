const { sql, connection } = require('../config/dbConfig');

class EmployeeRepository {
  async getAllEmployees() {
    try {
      const conn = await connection;
      const request = new sql.Request(conn);
      const result = await request.execute('GetAllEmployees'); 
      return result.recordset;
    } catch (err) {
      console.log('Cannot get data due to ' + err);
    }
  }
}

module.exports = EmployeeRepository;
