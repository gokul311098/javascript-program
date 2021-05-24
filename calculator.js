var number1 = parseInt(prompt('Enter the value of number1'));
var operator = prompt('Enter the operator');
var number2 = parseInt(prompt('Enter the value of number2'));
var result;



if(operator == '+') {
    result = number1 + number2;
}
else if(operator == '-') {
    result = number1 - number2;
}
else if(operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`The result of ${number1} ${operator} ${number2} = ${result}`); 


//using switch
var num1 = parseInt(prompt('Enter the value of num1'));
var oper = prompt('Enter the operator');
var num2 = parseInt(prompt('Enter the value of num2'));
var res;


switch(oper) {
    case '+':
        res = num1 + num2;
        break;
    case '-':
        res = num1 - num2;
        break;
    case '*':
        res = num1 * num2;
        break;
    case '/':
        res = num1 / num2;
        break;
    default:
        console.log('Not found');
        break;    
}

console.log(`The result of ${num1} ${oper} ${num2} = ${res}`);