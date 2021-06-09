function greet() {
    return 'Hello';
}

function name(func, n) {

    let message = func();

    console.log(`${message} ${n}`);
}

name(greet, 'John');
name(greet, 'sam');