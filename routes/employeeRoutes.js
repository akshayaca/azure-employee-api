const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');
const empCont = new EmployeeController();

router.get('/employees', empCont.getAllEmployees);

module.exports = router;
