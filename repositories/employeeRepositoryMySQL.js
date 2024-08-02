const { createMySqlConnection } = require('../config/rdsConfig');

class EmployeeRepositoryMySQL {
  async addEmployee(employee) {
    try {
      const conn = await createMySqlConnection();
      const [result] = await conn.execute(
        'CALL InsertEmployee(?, ?, ?, ?)',
        [employee.EmployeeID, employee.Name, employee.Position, employee.Salary]
      );
      await conn.end(); // Close the connection
      return result;
    } catch (err) {
      console.log('Cannot insert data due to ' + err);
      throw err;
    }
  }

  async getAllEmployees() {
    try {
      const conn = await createMySqlConnection();
      const [result] = await conn.execute('CALL GetAllEmployees()');
      await conn.end(); // Close the connection
      return result;
    } catch (err) {
      console.log('Cannot get data due to ' + err);
      throw err;
    }
  }

  async getEmployeeById(employeeId) {
    try {
      const conn = await createMySqlConnection();
      const [result] = await conn.execute('CALL GetEmployeeById(?)', [employeeId]);
      await conn.end(); // Close the connection
      return result[0];
    } catch (err) {
      console.log('Cannot get data due to ' + err);
      throw err;
    }
  }

  async updateEmployee(employeeId, employee) {
    try {
      const conn = await createMySqlConnection();
      const [result] = await conn.execute(
        'CALL UpdateEmployeeByID(?, ?, ?, ?)',
        [employeeId, employee.Name, employee.Position, employee.Salary]
      );
      await conn.end(); // Close the connection
      return result;
    } catch (err) {
      console.log(`Failed to update data due to ${err}`);
      throw err;
    }
  }

  async deleteEmployee(employeeId) {
    try {
      const conn = await createMySqlConnection();
      const [result] = await conn.execute('CALL DeleteEmployeeByID(?)', [employeeId]);
      await conn.end(); // Close the connection
      return result;
    } catch (err) {
      console.log('Cannot delete data due to ' + err);
      throw err;
    }
  }
}

module.exports = EmployeeRepositoryMySQL;
