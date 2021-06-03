var number = prompt('Enter the number');

var sum = 0;

var value = number;

while (value > 0) {
    let remainder = value % 10;

    sum = remainder + (sum * 10);
    value = parseInt(value / 10);
}
if (number == sum) {
    console.log(`The given number ${number} is palindrome`);
}
else {
    console.log(`The given number ${number} is not a palindrome`);
}



//using function
function palindrome(num) {

    while (num > 0) {
        let remainder = num % 10;
        sum = remainder + (sum * 10);
        num = parseInt(num / 10);

    }
    if (number == sum) {
        return `The given number ${number} is palindrome`;
    }
    else {
        return `The given number ${number} is not palindrome`;
    }
}

var number = prompt('Enter the number');
var sum = 0;
var value = palindrome(number);
console.log(value);



//find string
function palindrome(str) {
    let len = str.length;

    for (let i = 0; i < len; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return `The given string \'${string}\' is not a palindrome`;
        }
    }
    return `The given string \'${string}\' is  palindrome`;
}

var string = prompt('Enter the string');

var value = palindrome(string);
console.log(value);



//using built-in function
function palindrome(str) {
    let array = str.split('');

    let reverse = array.reverse();

    let values = reverse.join('');

    if (string == values) {
        return `The given string  \'${string}\' is palindrome`;
    }
    else {
        return `The given string \'${string}\' is not palindrome`;
    }
}

var string = prompt('Enter the string');
var value = palindrome(string);
console.log(value);