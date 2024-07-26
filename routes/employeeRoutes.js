const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');
const empCont = new EmployeeController();

router.get('/employees', empCont.getAllEmployees);
router.get('/employees/:id',empCont.getEmployeeById);
router.post('/employees',empCont.addEmployee);
router.put('/employees/:id',empCont.updateEmployee);
router.delete('/employees/:id',empCont.deleteEmployee);

module.exports = router;
