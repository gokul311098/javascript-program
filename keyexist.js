const person = {
    name: 'John',
    age: 21,
    gender: 'male'
}

let a = prompt('Enter the key');

let prop = a in person;

if (prop) {
    console.log('Key exists');
}
else {
    console.log('Key does not exists');
}



//using hasOwnProperty
const person = {
    name: 'Sam',
    age: 23,
    gender: 'male'
}

let a = prompt('Entee the key');

let prop = person.hasOwnProperty(a);

if (prop) {
    console.log('Key exists');
}
else {
    console.log('Key does not exists');
}