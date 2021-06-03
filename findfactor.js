var number = prompt('Enter the value of number');

console.log(`The factor of ${number} are:`);


for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);

    }
}