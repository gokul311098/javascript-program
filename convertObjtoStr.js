const person = {
    name: 'John',
    age: 23,
    gender: 'male'
}

const result = JSON.stringify(person);
console.log(result);
console.log(typeof (result));


const person1 = {
    name: 'sam',
    age: 24,
    gender: 'male'
}

const result1 = String(person1);
console.log(result1);
console.log(typeof (result1));