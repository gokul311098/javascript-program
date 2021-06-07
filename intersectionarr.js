function intersectionArr(arr1, arr2) {

    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let intersection = [];

    for (let i of set1) {

        if (set2.has(i)) {
            intersection.push(i);
        }
    }
    return intersection;
}

const array1 = [1, 2, 3, 4, 3, 2];
const array2 = [4, 2, 3, 1, 2, 1];

let result = intersectionArr(array1, array2);
console.log(result);



//using filter method
function intersection(arr3, arr4) {

    let intersec = arr3.filter(x => arr4.includes(x));

    return intersec;
}

const array3 = [1, 2, 3, 4, 7];
const array4 = [4, 2, 3, 1];

let result2 = intersection(array3, array4);
console.log(result2);