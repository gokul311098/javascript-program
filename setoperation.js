//set union
function union(setA, setB) {

    for (let i of setB) {
        setA.add(i);
    }
    return setA;
}

const setA = new Set(['apple', 'banana', 'grapes']);
const setB = new Set(['banana', 'apple', 'orange']);

let result = union(setA, setB);
console.log(result);


//set intersection
function intersection(setA, setB) {

    let intersection = new Set();

    for (let i of setA) {

        if (setB.has(i)) {
            intersection.add(i);
        }
    }
    return intersection;
}

const setA = new Set(['orange', 'apple', 'jackfruit']);
const setB = new Set(['grapes', 'pineapple', 'kiwi']);

let result = intersection(setA, setB);
console.log(result);


//set difference
function difference(setA, setB) {

    let difference = new Set(setA);

    for (let i of setB) {

        difference.delete(i);
    }
    return difference;
}

const setA = new Set(['apple', 'mango', 'grapes']);
const setB = new Set(['orange', 'grapes', 'apple']);

let result = difference(setA, setB);
console.log(result);


//set subset
function subset(setA, setB) {

    for (let i of setB) {
        if (!setA.has(i)) {
            return false;
        }
    }
    return true;
}

const setA = new Set(['apple', 'mango', 'grapes']);
const setB = new Set(['grapes', 'apple', 'jackfruit']);

let result = subset(setA, setB);
console.log(result);