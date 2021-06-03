const date1 = new Date();
const date2 = new Date();

console.log(date1);

console.log(date2);

let c1 = date1 > date2;
console.log(c1);

let c2 = date1 < date2;
console.log(c2);

let c3 = date1.getDate() === date2.getDate();
console.log(c3);

let c4 = date1 >= date2;
console.log(c4);

let c5 = date1 <= date2;
console.log(c5);

let c6 = date1 !== date2;
console.log(c6);