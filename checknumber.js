var number = prompt('Enter the value of number');

if (number > 0) {
    console.log('The number is positive');
}
else if (number == 0) {
    console.log('The number is zero');
}
else {
    console.log('The number is negative');
}



//using nested if...else
var num = prompt('Enter the value of num');

if (num >= 0) {
    if (num == 0) {
        console.log('The number is zero');
    }
    else {
        console.log('The number is positive');
    }
}
else {
    console.log('The number is negative');
}