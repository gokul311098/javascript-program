function reverseString(str) {

    newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        
        newString += str[i];
    }
    return newString;
}

var string = prompt('Enter the string');

var value = reverseString(string);
console.log(value);


//using built-in function
function reverseString(str) {

    splitString = str.split("");

    ReverseString = splitString.reverse();

    joinString = ReverseString.join('');

    return joinString;

}

var string = prompt('Enter the string');

var value = reverseString(string);
console.log(value);