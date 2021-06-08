function x() {
    console.log('Hi');
}

const y = setTimeout(x, 3000);
console.log(y);


function fun(x1, y1) {
    console.log(x1);
    console.log(y1);
}

const v = setTimeout(fun, 3000, 'Hello', 'Everyone');
console.log(v);