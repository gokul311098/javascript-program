function Character(str) {

    if ((str.startsWith('S') || str.startsWith('s')) && (str.endsWith('G') || str.endsWith('g'))) {
        console.log('The string start with S and ends with G');
    }
    else if ((str.startsWith('S')) || (str.startsWith('s'))) {
        console.log('The string start with S but does not ends with G');

    }
    else if (str.endsWith('G') || str.endsWith('g')) {
        console.log('The string deos not start with S but ends with G');
    }
    else {
        console.log('The string does not start S and does not ends G');
    }
}

const string = prompt('Enter the string');
Character(string);



//using regexp
function Character(str) {

    if ((/^S/.test(str) || /^s/.test(str)) && (/G$/.test(str) || /g$/.test(str))) {
        console.log('The string start with S and ends with G');
    }
    else if (/^S/.test(str) || /^s/.test(str)) {
        console.log('The string start with S but does not ends with G');
    }
    else if (/G$/.test(str) || /g$/.test(str)) {
        console.log('The string does not start with S but ends with G');
    }
    else {
        console.log('The string does not start S and does not ends G');
    }
}


const string = prompt("enter the string");
Character(string);

