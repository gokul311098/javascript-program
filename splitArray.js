//using slice method
function splitArray(arr, chun) {


    for (let i = 0; i < arr.length; i += 2) {
        let tempArr;

        tempArr = arr.slice(i, i + chun);
        console.log(tempArr);

    }
    
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;

splitArray(array, chunk);



//using splice method
function splitarr(arr1, chun1) {

    let temparr;

    while ( arr1.length > 0) {

        temparr = arr1.splice(0, chun1);
        console.log(temparr);
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const chunk1 = 3;

splitarr(array1, chunk1);