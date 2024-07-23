const EmployeeRepository = require('../repositories/employeeRepository');
const empRepo = new EmployeeRepository();

class EmployeeService{
    async getAllEmployees(){
        try{
            const result = await empRepo.getAllEmployees();
            return result;
        }
        catch(err){
            console.log(`error from service layer ${err}`);
        }
    }
}
module.exports=EmployeeService;