class Employee {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

const emp = new Employee("John",25,400);
// console.log(emp);
emp.showInfos();