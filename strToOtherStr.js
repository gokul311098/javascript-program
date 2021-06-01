const string = 'HELLO WORLD';

const checkString = 'HE';

const result = string.startsWith(checkString);

if (result) {
    console.log('The string start with "HE".');
}
else {
    console.log('The string does not start with "HE"');
}


const string1 = 'hello world';

const checkString1 = /^he/;

const result1 = checkString1.test(string1);

if (result1) {
    console.log(`The string start with 'he'.`);
}
else {
    console.log('The string does not start with "he".');
}

