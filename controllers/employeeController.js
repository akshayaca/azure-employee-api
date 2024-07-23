const EmployeeService = require('../services/employeeService');
const empService = new EmployeeService();
const apiKeyAuth = require('../utils/apiKeyAuth');
class EmployeeController{

    async getAllEmployees(req, res) {
        try {
            apiKeyAuth(req,res);
          const result = await empService.getAllEmployees();
          res.status(200).send(result);
        } catch (err) {
          res.status(500).send({ message: err.message });
        }
      }
}


module.exports = EmployeeController;
