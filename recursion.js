function sum(num) {
    
    if (num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }

}

var number = parseInt(prompt('Enter the value of number'));

var result = sum(number);

console.log(`The sum of ${number} is ${result}`);