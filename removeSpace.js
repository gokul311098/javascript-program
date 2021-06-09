function removeSpace(x) {

    let result = x.split(' ').join('');

    console.log(result);
}

let x = '   Hello World     ';

removeSpace(x);


//using regex
function trim(y) {

    let result1 = y.replace(/\s/g, '');

    console.log(result1);
}

let y = '   Hi Everyone     ';

trim(y);