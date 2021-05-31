const person = {
    name: 'John',
    age: 23
}

const student = {
    gender: 'male'
}

const value = Object.assign(person, student);

console.log(value);



//using spreed oper

const person1 = {
    name: 'sam',
    age: 22
}

const student1 = {
    gender: 'male'
}

const value1 = {...person1, ...student1}

console.log(value1);