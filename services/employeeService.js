const employeeRepository = require('../repositories/repositoryFactory');

class EmployeeService {
  async addEmployee(employee) {
    try {
      const result = await employeeRepository.addEmployee(employee);
      return result;
    } catch (err) {
      console.log('Error from service layer during insert: ' + err);
      throw err; // Re-throw the error to propagate it to higher layers
    }
  }

  async getAllEmployees() {
    try {
      const result = await employeeRepository.getAllEmployees();
      return result;
    } catch (err) {
      console.log('Error from service layer during retrieval: ' + err);
      throw err; // Re-throw the error to propagate it to higher layers
    }
  }

  async getEmployeeById(employeeId) {
    try {
      const result = await employeeRepository.getEmployeeById(employeeId);
      return result;
    } catch (err) {
      console.log('Error from service layer during retrieval: ' + err);
      throw err; // Re-throw the error to propagate it to higher layers
    }
  }

  async updateEmployee(employeeId, employee) {
    try {
      const result = await employeeRepository.updateEmployee(employeeId, employee);
      return result;
    } catch (err) {
      console.log('Error from service layer during update: ' + err);
      throw err; // Re-throw the error to propagate it to higher layers
    }
  }

  async deleteEmployee(employeeId) {
    try {
      const result = await employeeRepository.deleteEmployee(employeeId);
      return result;
    } catch (err) {
      console.log('Error from service layer during deletion: ' + err);
      throw err; // Re-throw the error to propagate it to higher layers
    }
  }
}

module.exports = EmployeeService;
