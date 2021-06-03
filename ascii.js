var string = prompt('Enter the string');

result = string.charCodeAt(0);
console.log(`The ascii value of ${string} is ${result}`);

res = string.charCodeAt(string.length-1);
console.log(`The ascii value of ${string} is ${res}`);

result = string.codePointAt(0);
console.log(`The ascii value of ${string} is ${result}`);


let sentence = "Hello-World!";

for (let codePoint of sentence.slice(0,7)){
    console.log(codePoint, codePoint.codePointAt(0));
  }
  