var a = prompt('Enter the value of a');

if(a < 0) {
    console.log(`${a} negative number does not exists factorial`);
}
else if(a == 0) {
    console.log(`factorial of ${a} is 1`);
}
else {
    fact = 1;
    for(let i = 1; i <= a; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${a} is ${fact}`);
}