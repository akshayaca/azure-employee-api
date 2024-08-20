const EmployeeService = require('../services/employeeService');//package
const empService = new EmployeeService();
const apiKeyAuth = require('../utils/apiKeyAuth');

class EmployeeController{
   
  async addEmployee(req,res){
      try{
         apiKeyAuth(req,res);
          const emp = req.body;
          if (emp && emp.EmployeeID && emp.Name){
              const result = await empService.addEmployee(emp);
              res.status(201).send(result);

          }else{
              res.status(404).send('Please provide a valid input');
          }
          

      }
      catch(err){
          res.status(500).send(err.message);
      }
  }

  async getAllEmployees(req,res){
      try{
         apiKeyAuth(req,res);
              
              const result = await empService.getAllEmployees();
              res.status(200).send(result);

          }
      catch(err){
          res.status(500).send(err.message);
      }
  }

  async getEmployeeById(req,res){
      try{
         apiKeyAuth(req,res);
          const employeeId = req.params.id;
          if(employeeId != null){
          const result = await empService.getEmployeeById(employeeId);
          res.status(200).send(result);

          }else{
              res.status(404).send('Employee Not found');
          }
      }
      catch(err){
          res.status(500).send(err.message);
      }
  }

  async updateEmployee(req,res){
      try{
          apiKeyAuth(req,res);
          const empId = req.params.id;
          const emp = req.body;
          if(empId != null){
          const result = await empService.updateEmployee(empId,emp);
          res.status(200).send(result);

          }else{
              res.status(404).send('Please provide a valid input');
          }
      }
      catch(err){
          res.status(500).send(err.message);
      }
  }

  async deleteEmployee(req,res){
      try{
         apiKeyAuth(req,res);
          const empId = req.params.id;
              if(empId != null){
              const result = await empService.deleteEmployee(empId);
              res.status(200).send(result);

          }else{
              res.status(404).send('Please provide a valid input');
          }

      }
      catch(err){
          res.status(500).send(err.message);
      }
  }
}

module.exports = EmployeeController;