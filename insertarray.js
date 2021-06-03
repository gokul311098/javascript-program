function insertElement() {

    let array = [1, 2, 3, 4, 5];

    let index = 5;

    let element = 6;

    console.log(array);

    array.splice(index, 0, element);

    console.log(array);
}

insertElement();


//using for loop
function insertElement1() {

    let array1 = [1, 3, 4, 5];

    let index1 = 1;

    let element1 = 2;

    console.log(array1);

    for (let i = array1.length; i > index1; i--) {

        array1[i] = array1[i - 1];
    }
    array1[index1] = element1;


    console.log(array1);
}

insertElement1();