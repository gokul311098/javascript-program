const string1 = 'Javascript Program';
const string2 = 'javascript program';

const result = string1.toUpperCase() === string2.toUpperCase();

if (result) {
    console.log('strings are similar');
}
else {
    console.log('strings are not similar');
}


const string3 = 'Javascript Program';
const string4 = 'javascript program';

const regex = new RegExp(string3, 'g');

const result1 = regex.test(string4);

if (result1) {
    console.log('strings are similar');
}
else {
    console.log('string are not similar');
}



const string5 = 'JavaScript Program';
const string6 = 'javascript program';

const result2 = (string5.toLowerCase()).localeCompare(string6.toLowerCase());

if (result2 == 0) {
    console.log('strings are similar');
}
else {
    console.log('strings are not similar');
}