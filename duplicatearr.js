//using push() and indexOf()
function duplicateArray(arr) {

    let unique = [];

    for (let i of arr) {
        if (unique.indexOf(i) == -1) {
            unique.push(i);
        }
    }
    console.log(unique);
}

const array = [1, 2, 3, 2, 3, 4];
console.log(array);

duplicateArray(array);



//using set and spreed
function duplicateArray1(arr1) {

    let unique1 = [...new Set(arr1)];

    console.log(unique1);
}

const array1 = [1, 2, 3, 5, 2, 4, 1];
console.log(array1);

duplicateArray1(array1);