const string = prompt('Enter the string');

const checkString = prompt('Enter the check string');

if (string.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
}
else {
    console.log(`The string does not contain ${checkString}`);
}


const string1 = prompt('Enter the string');

const checkString1 = prompt('Enter the check string');

if (string1.indexOf(checkString1) !== -1) {
    console.log(`The string contains ${checkString1}`);
}
else {
    console.log(`The string does not contanin ${checkString1}`);
}