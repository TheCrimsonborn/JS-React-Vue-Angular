class Person { //SuperClass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}

class Employee extends Person { //DerivedClass, Subclass, ChildClass
    constructor(name,age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;
    }
    showInfos(){//Overriding
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
    toString(){//Overriding
        console.log("Employee")
    }
    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp = new Employee("John",25,4000);
emp.showInfos();
emp.toString();
emp.raiseSalary(500);
emp.showInfos();
