//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500016     Name:shisanucha chengsamo
class EmployeeManager {
    static id = 1;
    constructor(){
        this.employees = [];
    }
    addEmployee(name, position){
        let a ={
            id : EmployeeManager.id++,
            name: name,
            position: position
        }
        let index = this.employees.findIndex(e => e.name === this.employees.name);
        if(index === -1){
           return this.employees.push(a); 
        }else{
            return null;
        }
    }
    removeEmployee(id){
        const index = this.employees.findIndex(employee => employee.id === id);
        
        // If employee with given id doesn't exist, return false
        if (index === -1) {
            return false;
        }

        // Remove employee from employees array
        this.employees.splice(index, 1);
        return this.employees
    }
    findEmployeeByName(name){
        let Fname = this.employees.find(e => e.name.toLowerCase() === name.toLowerCase());
        return Fname;
    }
    sortEmployeeByName(){
        let s = this.employees.sort();
        return console.log(s);;
    }
    updateEmployee(employee){

    }
    promoteEmployee(id, newPosition){
        let findID = this.employees.find(employee => employee.id === id);

        if(findID === this.employees){
            this.employees.position = `${newPosition}`;
            
        } else{
            return false;
        }
    }
}

 
// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.addEmployee("shisanucha", "Engineer"));
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe
