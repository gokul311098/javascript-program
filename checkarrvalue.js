const array = ['you', 'will', 'learn', 'javascript'];

const result = array.includes('javascript');

console.log(array);

if (result) {
    console.log('Array contains "javascript"');
}
else {
    console.log('Array does not contain "javascript"');
}


const array1 = ['you', 'will', 'learn', 'javascript'];

console.log(array1);

const result1 = array.indexOf('program') !== -1;

if (result1) {
    console.log('Array conains "program"');
}
else {
    console.log('Array does not contains "program"');
}