function sum() {

    if (arguments.length == 0) {
        console.log('You have not passed arguments');
    }
    else if (arguments.length == 1) {
        console.log('You have passed atleast two arguments');
    }
    else {

        let length = arguments.length;
        let result = 1;

        for (let i = 0; i < length; i++) {

            result = result * arguments[i];
        }
        console.log(result);
        console.log(arguments);
    }
}

sum();
sum(1, 2);
sum(1, 2, 3, 4);


//using switch case
function sum1() {

    switch (arguments.length) {

        case 0:
            console.log('You have not passed arguments');
            break;
        case 1:
            console.log('You have passed atleast two arguments');
            break;
        default:
            let length = arguments.length;
            let result1 = 0;

            for (let i = 0; i < length; i++) {

                result1 = result1 + arguments[i];

            }
            console.log(result1);
            break;

    }
}

sum1(3, 4);
sum1(2);