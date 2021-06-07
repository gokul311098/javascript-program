function checkVariable(variable) {

    if (variable == null) {
        console.log('The variable are undefined or null');
    }
    else {
        console.log('The variable is neither undefined nor null')
    }
}

let newVariable;

checkVariable(2);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);



//using typeOf
function checkVariable1(variable1) {

    if (variable1 === null || variable1 === undefined) {
        console.log('The variable are undefined or null');
    }
    else {
        console.log('The variable is neither undefined nor null')
    }
}

let newVariable1;

checkVariable1(2);
checkVariable1('hello');
checkVariable1(null);
checkVariable1(newVariable1);
