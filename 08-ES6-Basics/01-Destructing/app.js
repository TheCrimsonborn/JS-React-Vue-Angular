// Object Destructing

/*
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1,b:number2,c:number3} = numbers;
console.log(number1,number2,number3);
*/

// Func Destructing

/*
const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);
*/

// Demo

const person = {
    name:"John",
    surname:"Doe",
    age:24,
    salary:300,
    showInfos: () => console.log("Getting Infos...")
    
}

const {name:isim,surname:soyad,age:yas,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,soyad,yas,maas);

bilgileriGoster();