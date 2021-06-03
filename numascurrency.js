const number = 2500;

const value = '$' + number;
console.log(value);


//using toLocalString
const number2 = (2500).toLocaleString('en-US', {
    
    style: 'currency',
    currency: 'USD'
});

console.log(number2);
