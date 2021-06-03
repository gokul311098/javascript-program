//using for loop
function removearray(arr, n) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== n) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const array = removearray([1, 2, 3, 4, 5], 2);
console.log(array);



//using splice()
function removearray1(arr1, n1) {
    let index = arr1.indexOf(n1);

    if (index > -1) {
        arr1.splice(index, 1);
    }
    return arr1;
}

const array1 = removearray1([1, 2, 3, 4, 5], 1);
console.log(array1);