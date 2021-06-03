const string = '    hello world   ';

const result = string.trim();

console.log(result);


//using regexp
const string1 = '   hello world     ';

const result1 = string.replace(/^\s+|\s+\s$/g, '');

console.log(result1);