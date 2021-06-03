const string = 'Mr red has a red house and red car';

const regex = /red/gi;

const value = string.replace(regex, 'blue');
console.log(string);
console.log('after changing');
console.log(value);



//using built-in function
const string1 = 'Mr red has a red house and red car';

const regexp = string.split('red');
const value1 = regexp.join('blue');
console.log(string1);
console.log(regexp);
console.log(value1);