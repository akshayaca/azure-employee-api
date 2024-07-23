const express = require('express');
const EmployeeController = require('../controllers/employeeController');
const empCont = new EmployeeController();
const router = express.Router();

router.get('/employees', empCont.getAllEmployees);

module.exports = router;
