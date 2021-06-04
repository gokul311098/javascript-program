function compareArray(arr1, arr2) {

    let compare = JSON.stringify(arr1) === JSON.stringify(arr2);

    if (compare) {
        console.log('The two arrays elements are same');
    }
    else {
        console.log('The two array element are not same');
    }
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

console.log(array1);
console.log(array2);

compareArray(array1, array2);



//using for loop
function compareElement(arr3, arr4) {

    if (arr3.length != arr4.length) {
        return false;
    }
    else {

        let result = false;

        for (let i = 0; i < arr3.length; i++) {

            if (arr3[i] != arr4[i]) {
                return false;
            }
            else {
                result = true;
            }
        }
        return result;
    }
}

const array3 = [1, 2, 3, 5];
const array4 = [1, 2, 3, 4];

console.log(array3);
console.log(array4);

let result = compareElement(array3, array4);

if (result) {
    console.log('The two array element are same');
}
else {
    console.log('The two array element are not same');
}