var number = prompt('Enter the value of number');
var range = prompt('Enter the value of range');

console.log(`The multiplication table of ${number} is:`);

for (let i = 1; i <= range; i++) {
    let result = i * number;
    console.log(`${i} * ${number} = ${result}`);
}