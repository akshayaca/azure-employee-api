const { sql, connection } = require('../config/dbConfig');

class EmployeeRepository{
  async addEmployee(employee) {
      try {
          const conn = await connection;
          const request = new sql.Request(conn);
          request.input('EmployeeID', sql.Int, employee.EmployeeID);
          request.input('Name', sql.NVarChar, employee.Name);
          request.input('Position', sql.NVarChar, employee.Position);
          request.input('Salary', sql.Float, employee.Salary);
          const result = await request.execute('InsertEmployee');
          return result.recordset;
      } catch (err) {
          console.log('Cannot insert data due to ' + err);
          throw err;
      }
  }
  async getAllEmployees(){
      try{
      const conn = await connection;
      const request = new sql.Request(conn);
      const result = await request.execute('GetAllEmployees');
      return result.recordset;

      }
      catch(err){
          console.log('Cannot get data due to '+err);
      }
      
  }

  async getEmployeeById(employeeId) {
      try {
          const conn = await connection;
          const request = new sql.Request(conn);
          request.input('EmployeeID', sql.Int, employeeId);
          const result = await request.execute('GetEmployeeById');
          return result.recordset[0]; 
      } catch (err) {
          console.log('Cannot get data due to ' + err);
          throw err;
      }
  }

  async updateEmployee(employeeId, employee) {
      try {
          const conn = await connection;
          const request = new sql.Request(conn);
          request.input('EmployeeID', sql.Int, employeeId);
          request.input('Name', sql.NVarChar, employee.Name);
          request.input('Position', sql.NVarChar, employee.Position);
          request.input('Salary', sql.Float, employee.Salary);
          const result = await request.execute('UpdateEmployeeByID');
          return result.recordset;
      } catch (err) {
          console.log(`Failed to update data due to ${err}`);
          throw err;
      }
  }
  async deleteEmployee(employeeId){
      try{
          const conn = await connection;
          const request = new sql.Request(conn);
          request.input('EmployeeID',employeeId);
          const result = await request.execute('DeleteEmployeeByID');
          return result.recordset;
          
      }
          catch(err){
              console.log('Cannot delete data due to '+err);
          }
      }
  }
      
module.exports = EmployeeRepository;
