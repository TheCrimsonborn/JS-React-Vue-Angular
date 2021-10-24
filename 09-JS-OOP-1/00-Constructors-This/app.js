/*
const emp1 = {
    name:"John",
    age:25,
    showInfos:function() {console.log("Getting Infos")}
};
const emp2 = {
    name:"Jane",
    age:25,
    showInfos:function() {console.log("Getting Infos")}
};
*/

function Employee(name,age,salary){//Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("John",25,4000);
const emp2 = new Employee("Jane",25,6500);

emp1.showInfos();
emp2.showInfos();
