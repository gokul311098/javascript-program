var number = prompt('Enter the value of number');

if (number < 0) {
    console.log('Enter the positive number');
}
else {
    for (let i = 0; i < number; i++) {
        console.log(fibonaci(i));
    }
}

function fibonaci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonaci(num - 1) + fibonaci(num - 2);
    }
}

