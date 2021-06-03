var number = prompt('Enter the value of number');
var isprime = true;

if (number == 1) {
    console.log(`${number} is neither prime nor composite`);
}
else if (number > 1) {

    for (let i = 2; i < number; i++) {

        if (number % i == 0) {
            
            isprime = false;
            break;
        }
    }
    if (isprime) {
        console.log(`${number} is prime number`);
    }
    else {
        console.log(`${number} is not a prime number`);
    }
}
else {
    console.log(`${number} is not a prime number`);
}