const base = prompt('Enter the base value of triangle');
const height = prompt('Enter the height value of triangle');

const value = (base * height) / 2;
console.log(`The area of triangle is ${value}`);


//Known three sides
const side1 = parseInt(prompt('Enter the value of side1'));
const side2 = parseInt(prompt('Enter the value of side2'));
const side3 = parseInt(prompt('Enter the value of side3'));

//find semi-perimeter
const s = (side1 + side2 + side3) / 2;

//find area of triangle
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of triangle is ${area}`);
