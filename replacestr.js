var string = "JAVA is awesome.java is fun";

var pattern = /java/i;
var patt = /java/g;
var pat = /java/gi;

var new_string = string.replace(pattern, "javascript");
console.log(new_string);

var new_string = string.replace(patt, "javascript");
console.log(new_string);

var new_string = string.replace(pat, "javascript");
console.log(new_string);



