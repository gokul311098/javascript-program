function sortArray(a, b) {

    let name1 = a.name.toUpperCase();
    let name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    }
    else {
        comparison = -1;
    }
    return comparison;
}

const students = [
    {name: 'John', age: 27}, {name: 'sam', age: 21}, {name:'lilly', age: 25}
]

console.log(students.sort(sortArray));


//sort by age
function sortArray1(a, b) {

    let result = a.age - b.age;

    return result;
}

const student = [
    {name: 'John', age: 27}, {name: 'sam', age: 21}, {name:'lilly', age: 25}
]

console.log(student.sort(sortArray1));