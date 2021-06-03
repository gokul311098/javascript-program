const string = 'Javascript Programming Language';

const regex = string.replace(/a/g, 'A');
console.log(regex);



//using built-in function
const string1 = 'Javascript Programming Language';

const regex1 = string1.split('a');
const regex2 = regex1.join('A');

console.log(string1);
console.log(regex2);