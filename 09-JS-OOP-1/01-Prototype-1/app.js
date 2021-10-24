function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
}

const emp1 = new Employee("John",25);
const emp2 = new Employee("Jane",25);
emp1.showInfos();
emp2.showInfos();
console.log(emp1);
console.log(emp2);

