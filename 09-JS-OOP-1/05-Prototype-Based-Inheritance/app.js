//Inheritance
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function() {
    console.log("Name: " + this.name + " Yaş: " + this.age);
}

// const person = new Person("John",25);
// console.log(person);

function Employee(name,age,salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age)
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.showInfos=function() {
    console.log("Name: " + this.name + " Yaş: " + this.age + " Salary: " + this.salary);
}
const emp = new Employee("John",25,4000);
// console.log(emp);
// emp.showInfos();
console.log(emp);
