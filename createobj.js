const Person = {
    name: 'John',
    age: 50,
    gender: 'male',
    hobbies: ["palying football", "leasoning music"],
    greet: function () {
        return 'My name is ' + this.name;
    },
    marks: {
        Tamil: 90,
        Science: 95
    }
};

console.log(Person.name);
console.log(Person.gender);
console.log(Person.greet());
console.log(Person.marks.Tamil);



//using constructor
function Person() {
    this.name = 'Sam',
        this.age = 23,
        this.gender = 'male',
        this.hobbies = ["palying football", "leasoning music"],
        this.greet = function () {
            let surname = 'curran';
            return 'My Name is ' + this.name + surname;
        },
        this.marks = {
            Tamil: 94,
            Science: 99
        }

};

const person = new Person();
console.log(person.age);
console.log(person.greet());
console.log(person.marks.Science);



//using constructor create many object
function Person(person_name, person_age, person_gender, person_hobbies) {
    this.name = person_name,
        this.age = person_age,
        this.gender = person_gender,
        this.hobbies = person_hobbies,
        this.greet = function () {
            return `My name is ${this.name} and My Hobbie is ${this.hobbies}`;
        }
}

const person1 = new Person("John", 21, 'male', 'playing football');
const person2 = new Person("Sam", 22, 'male', 'gardening');
const person3 = new Person("lilly", 23, 'female', 'leasoning music');


console.log(person1.name);
console.log(person1.gender);
console.log(person2.name);
console.log(person2.gender);
console.log(person3.name);
console.log(person3.gender);
console.log(person1.greet());
