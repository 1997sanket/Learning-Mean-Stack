
//Closure function to automatically generate employee ID.

getId = (function () {

    let ID = 0;
    return function () {

        return ID = ID + 1;

    }

})();



class Employee {


    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.id = getId();
    }




    get empID() {
        return this.id;
    }

    get empName() {
        return this.name;
    }

    set empName(name) {
        this.name = name;
    }

    get empSalary() {
        return this.salary;
    }

    set empSalary(salary) {
        this.salary = salary;
    }


    netSalary() {
        return this.salary - (0.1 * this.salary);
    }
}


let e1 = new Employee('Sanket', 100000);
let e2 = new Employee('Aditya', 90000);
let e3 = new Employee('Dhruv', 80000);


console.log(e1.empID, e1.empName, e1.empSalary, e1.netSalary());
console.log(e2.empID, e2.empName, e2.empSalary, e2.netSalary());
console.log(e3.empID, e3.empName, e3.empSalary, e3.netSalary());

