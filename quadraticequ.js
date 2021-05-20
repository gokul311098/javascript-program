var a = prompt('Enter the value of a');
var b = prompt('Enter the value of b');
var c = prompt('Enter the value of c');

var root = b * b - 4 * a * c;

if(root > 0) {
    let root1 = (-b + Math.sqrt(root)) / (2 * a);
    let root2 = (-b - Math.sqrt(root)) / (2 * a);

    console.log(`The value of equation is ${root1} and  ${root2}`);
}

else if (root == 0) {
    let root3 = (-b + Math.sqrt(root)) / (2 * a);
    let root4 = (-b - Math.sqrt(root)) / (2 * a);

    console.log(`The value of equation is  ${root3} and  ${root4}`);
}

else {
    let real = (-b / (2 * a)).toFixed(2);
    let imaginary = (Math.sqrt(-root) / (2 * a)).toFixed(2);

    console.log(`The value of equation is  ${real} + ${imaginary}i and  ${real} - ${imaginary}i`);
}