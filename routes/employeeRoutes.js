const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController');
const empCont = new EmployeeController();

router.get('/employees', empCont.getAllEmployees);

module.exports = router;
