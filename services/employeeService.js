const EmployeeRepository = require('../repositories/employeeRepository');
const empRepo = new EmployeeRepository();

class EmployeeService{
  async addEmployee(employee){
      try{
          const result = await empRepo.addEmployee(employee);
          return result;

      }
      catch(err){
          console.log('error from service layer during insert'+err);
      }
  }

  async getAllEmployees(){
      try{
          const result = await empRepo.getAllEmployees();
          return result;
      }
      catch(err){
          console.log('error from service layer during insert'+err);
      }
  }

  async getEmployeeById(employeeId){
      try{
          const result = await empRepo.getEmployeeById(employeeId);
          return result;
      }
      catch(err){
          console.log('error from service layer during insert'+err);
      }
  }

  async updateEmployee(employeeId,employee){
      try{
          const result = await empRepo.updateEmployee(employeeId,employee);
          return result;
      }
      catch(err){
          console.log('error from service layer during insert'+err);
      }
  }

  async deleteEmployee(employeeId){
      try{
          const result = await empRepo.deleteEmployee(employeeId);
          return result;
      }
      catch(err){
          console.log('error from service layer during insert'+err);
      }
  }
}

module.exports = EmployeeService;