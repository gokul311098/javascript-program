function testVariable(variable) {

    if ( variable instanceof Function) {
        console.log('The variable is function type');
    }
    else {
        console.log('The variable is not a function type');
    }
}


const var1 = 'John';
const var2 = function() {
    console.log('Hi');
}

testVariable(var1);
testVariable(var2);



//using typeOf operator
function testVariable1(variable1) {

    if (typeof variable1 === 'function') {
        console.log('The variable is function type');
    }
    else {
        console.log('The variable is not a function type');
    }
}

const value1 = true;
const value2 = function() {
    console.log('Hello');
}

testVariable1(value1);
testVariable1(value2);



//using toString
function testVariable2(variable2) {

    if (Object.prototype.toString.call(variable2) == '[object Object]') {
        console.log('The variable is object type');
    }
    else {
        console.log('The variable is not object type');
    }
}

const v1 = {name: 'sam'};
const v2 = function() {
    console.log('Hello');
}


testVariable2(v1);
testVariable2(v2);
