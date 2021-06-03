const Person = {
    name: 'John',
    age: 40,
    gender: 'male',
    hobbies: ['reading', 'coding'],
    greet: function () {
        return 'Hi everyone'
    },
}

console.log(Person);
delete Person.hobbies;
console.log(Person);