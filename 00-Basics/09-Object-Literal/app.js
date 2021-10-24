let value;

const developer = {
    name : "John Doe",
    age : 24,
    email : "johnthedeveloper@mail.com",
    skills : ["Python","Java","C++"],

    address : {
        city : "LA",
        street : "Hollywood Boulevard"
    },

    work : function(){
        console.log("The personel is working!");
    }
}

value = developer;
value=developer.name;
value=developer["name"];
value=developer.skills;
value=developer.address.city;
// developer.work();


decription = [developer.name,developer.age,developer.email];


const developers = [
    {name:"Jane Doe",age:25},
    {name:"Lucas King",age:34},

]
value = developers;
value = developers[0].name;
value = developers[1].name;


console.log(value);
