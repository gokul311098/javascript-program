const person = {
    name: 'John',
    age: 34,
    gender: 'male'
}

let count = 0;

for ( let key in person) {

    count++;
    console.log(key);
}
console.log('The total keys in object(person) are:', count);



//using built-in function
const person1 = {
    name: "sam",
    age: 32,
    gender: 'male',
    greet: function() {
        return 'Hi'
    }
}

let count1 = Object.keys(person1);
let count2 = count1.length;
console.log(count1);
console.log('The total keys in object(person1) are:', count2);