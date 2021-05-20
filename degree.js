//find celsius
var celsius = prompt('Enter the celsius value');

var farhen = celsius * 1.8 + 32;

console.log(`${celsius} degree celsius is equal to ${farhen} degree farhenheit`);


//find farhenheit
var farhenheit = prompt('Enter the farhenheit value');

var cel = (farhenheit - 32) / 1.8;

console.log(`${farhenheit} degree farhenheit is equal to ${cel} degree celsius`);
