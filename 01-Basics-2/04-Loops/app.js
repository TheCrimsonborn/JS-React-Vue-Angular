// While
/*
let i = 0;

while(i<10){
    console.log(i);
    i++;
}
*/

//Break & Continue

/*
let i = 0;
while(1<10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}
*/

/*
let i = 0;
while (1 < 10) {
    if(i == 3 || i == 5){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
*/

//Do While
/*
let i = 0;
do {
    console.log(i);
    i++;
}while(i<10);
*/

//For
/*
const langs = ["Python","C++","Java"];
for(let index = 0; index < langs.length;index++){
    console.log(langs[index]);
}
*/

/*
const langs = ["Python","C++","Java"];
langs.forEach(function(lang,index){
    console.log(lang,index);
})
*/

//Map
/*
const users=[
    {name:"John",age:25},
    {name:"Jane",age:30},
    {name:"Max",age:28},

];

const names = users.map(function(user){
    return user.name;
})
const ages = users.map(function(user){
    return user.age;
})
console.log(names,ages);
// console.log(ages);
*/

//For In
const user = {
    name:"John",
    age:25
};

for (let key in user){
    console.log(key,user[key]);
}

