function mergeArray(arr, arr1) {

    let combine = arr.concat(arr1);

    console.log(combine);

    let unique = [];

    for (let i of combine) {
        if (unique.indexOf(i) === -1) {
            unique.push(i);
        }

    }

    console.log(unique);
}

const array = [1, 2, 3, 4];
const array1 = [3, 4, 5, 6];

mergeArray(array, array1);



//using set and spreed oper
function mergeArray1(arr2, arr3) {

    let combineArr = [...arr2, ...arr3];

    console.log(combineArr);

    let set = [...new Set(combineArr)];

    console.log(set);
}

const array2 = ['a', 'b', 'c', 'd'];
const array3 = ['c', 'd', 'e', 'f'];

mergeArray1(array2, array3);