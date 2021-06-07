//create a file module.js
//From export 

const string = 'Hello World';

const number = 23;

function add(a, b) {

    return a + b;
}

export {string, number, add };


//create another file main.js
//To import

import { string, number, add } from './module.js';

console.log(string); //Hello World

console.log(number); // 23

console.log(add(2, 3));  //5
