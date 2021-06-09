function checkInteger(x) {

    if (typeof x == 'number' && !isNaN(x)) {
        
        if (Number.isInteger(x)) {
            console.log(`${x} is an integer number`);
        }
        else {
            console.log(`${x} is a float number`);
        }
    }
    else {
        console.log(`${x} is not a number`);
    }
}


checkInteger('Hello');
checkInteger(44);
checkInteger(44.2);


//using RegExp
function testInteger(y) {

    let regex = /^-?[0-9]+$/;

    let result = regex.test(y);

    if (result) {
        console.log(`${y} is an integer number`);
    }
    else {
        console.log(`${y} is a float number`);
    }
}


testInteger(33);
testInteger(2.0);
testInteger(1.23);