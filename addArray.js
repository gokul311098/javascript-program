//using unshift()
function addElement(arr) {

    arr.unshift(1);

    console.log(arr);
}

const array = [2, 3];
console.log(array);

addElement(array);


//using splice
function addElement1(arr1) {

    arr1.splice(0, 0, 3);

    console.log(arr1);
}

const array1 = [4, 5];
console.log(array1);

addElement1(array1);



//using spreed oper
function addElement2(arr2) {

    arr2 = [5, ...arr2];

    console.log(arr2);
}


const array2 = [6, 7];
console.log(array2);

addElement2(array2);


//using concat 
function addElement3(arr3) {

    arr3 = [7].concat(arr3);

    console.log(arr3);
}

const array3 = [8, 9];
console.log(array3);

addElement3(array3);