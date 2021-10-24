let value;


const now = new Date();
// console.log(now);

const myBDate = new Date("9-08-1997 08:15:00")
const myBDate2 = new Date("September 08 1997")
const myBDate3 = new Date("09/08/1997")


// console.log(myBDate);
// console.log(myBDate2);
// console.log(myBDate3);

value = myBDate.getMonth();
value = myBDate.getDate();
value = myBDate.getDay();
value = myBDate.getHours();
value = myBDate.getMinutes();
value = myBDate.getSeconds();

myBDate.setMonth("10");
myBDate.setDate("10");
myBDate.setFullYear("1938");
myBDate.setHours("09");
myBDate.setMinutes("05");
myBDate.setSeconds("00");
value = myBDate;

console.log(value);