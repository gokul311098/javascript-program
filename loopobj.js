const person = {
    name: 'John',
    age: 23,
    hobbies: ['reading', 'writing']
}

const student = {
    gender: 'male'
}

person.__proto__ = student;

for (let x in person) {
    console.log(x + '-' + person[x]);
}

/* const person1 = {
    name:'sam',
    age: 21,
    gender: 'male'
}

for (let [key, value] of Object.entries(person1)) {
    console.log(key + '-' + value);
} */