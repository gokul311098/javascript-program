const person = {
    name: 'John',
    age: 23,
    gender: 'male'
}

const cloneperson = Object.assign({}, person);

console.log(person);
cloneperson.name = 'peter';
console.log(cloneperson);



//using spreed oper
const person1 = {
    name: 'sam',
    age: 21,
    gender: 'male'
}

const cloneperson1 = {...person1}

console.log(person1);
cloneperson1.age = 34;
console.log(cloneperson1);



//using JSON.parse
const person3 = {
    name: 'lilly',
    age: 24,
    gender: 'female',
    greet: function() {
        return 'HI'
    }
}

const cloneperson3 = JSON.parse(JSON.stringify(person3));

console.log(person3);
cloneperson3.name = 'marry';
console.log(cloneperson3);