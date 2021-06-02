const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}

console.log(date);

let slashFormat = month + '/' + day + '/' + year;
console.log(slashFormat);

let slashFormat1 = day + '/' + month + '/' + year;
console.log(slashFormat1);

let slashFormat2 = year + '/' + month+ '/' + day;
console.log(slashFormat2);

let dashFormat = month + '-' + day + '-' + year;
console.log(dashFormat);

let dashFormat1 = day + '-' + month + '-' + year;
console.log(dashFormat1);

let dashFormat2 = year + '-' + month + '-' + day;
console.log(dashFormat2);