//using push() method
function insertObject(arr, obj) {

    arr.push(obj);

    console.log(arr);
}

let array = [1, 2, 3];

let object = {
    name: 'John',
    age: 23
}

insertObject(array, object);


//using splice method
function insertObject1(arr1, obj1) {

    let index = arr1.length;

    arr1.splice(index, 0, obj1);

    console.log(arr1);
}

let array1 = ['Hi', 'Hello'];

let object1 = {
    name: 'sam',
    age: 24
}

insertObject1(array1, object1);



//using spreed oper
function insertElement2(arr2, obj2) {

    let result = [...arr2, obj2];

    console.log(result);
}

let array2 = [1, 2, 3];

let object2 = {
    name: 'lilly',
    age: 21
}

insertElement2(array2, object2);
