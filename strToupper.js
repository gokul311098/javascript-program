function upperCase(str) {

    let count = str.charAt(0).toUpperCase() + str.slice(1);

    return count;
}

const string = prompt('Enter the string');

const value = upperCase(string);

console.log(value);



//using regexp
function upperCase(str) {

    let count = str.replace(/^./, str[0].toUpperCase());

    return count;
}

const string = prompt('Enter the string');

const value = upperCase(string);

console.log(value);