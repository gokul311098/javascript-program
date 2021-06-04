function extractValue(arr, prop) {

    /* let extracted = arr.map(function(item) {

        return item[prop];
    })
    return extracted; */

    let extracted = arr.map((item) => item[prop]);

    return extracted;
}


const array = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 }
];

let result = extractValue(array, 'a');
console.log(array);
console.log(result);



//using for loop
function extract(arr1, props) {

    let extract = [];

    for (let i = 0; i < arr1.length; i++) {
        extract.push(arr1[i][props]);
    }
    return extract;
}

const array1 = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 }
];

const result1 = extract(array1, 'b');
console.log(array1);
console.log(result1);