const EmployeeRepository = require('../repositories/EmployeeRepository');
const empRepo = new EmployeeRepository();

class EmployeeService {
  async getAllEmployees() {
    try {
      const result = await empRepo.getAllEmployees();
      return result;
    } catch (err) {
      console.log(`Error from service layer: ${err}`);
      throw err;
    }
  }
}

module.exports = EmployeeService;
