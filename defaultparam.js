function defaultParameter(x = 3, y = 4) {
    return x + y;
}

console.log(defaultParameter());
console.log(defaultParameter(5));
console.log(defaultParameter(4, 5));



//using expression
function defaultParameter1(x = 1, y = x * 5) {
    return x * y;
}

console.log(defaultParameter1());
console.log(defaultParameter1(2, 3));
console.log(defaultParameter1(3));