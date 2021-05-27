var string = prompt('Enter the string');

var words = string.split(' ');

var value = words.sort();


for (let i in value) {
    console.log(i);
}

for (let i of value) {
    console.log(i);
}

value.forEach(element => {
    console.log(element);
});

