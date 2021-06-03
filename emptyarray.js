function emptyArray(arr) {

    arr = [];

    return arr;
}

const array = [1, 2, 3];
console.log(array);

let result = emptyArray(array);
console.log(result);


//using splice
function emptyArray1(arr1) {

    arr1.splice(0, arr1.length);

    return arr1;
}

const array1 = [4, 5, 6];
console.log(array1);

let result1 = emptyArray1(array1);
console.log(result1);


//using length
function emptyArray2(arr2) {

    arr2.length = 0;

    return arr2;
}

const array2 = [2, 3, 4];
console.log(array2);

let result2 = emptyArray2(array2);
console.log(result2);