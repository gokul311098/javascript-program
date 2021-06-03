const string = `Hi Everyone.
Welcome to this javascript Tutorial.
To Learn javascript Programming Language`;


const result = string.split('\n').join('<br>');

console.log(string);
console.log(result);



//using regexp
const string1 = `Hi Everyone.
Welcome to this javascript Tutorial.
To Learn javascript Programming Language`;

const result1 = string.replace(/\n/g, '<br>');

console.log(string1);
console.log(result1);