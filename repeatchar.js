function repeatChar(str, letter) {
    
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count += 1;
        }
    }
    return count;
}

const string = prompt('Enter the string');

const letterString = prompt('Enter the checking character');

const value = repeatChar(string, letterString);

console.log(value);



//using regular expression
function RepeatChar(str, letter) {

    let reg = new RegExp(letter, 'g');

    let v = str.match(reg).length;

    return v;
}

const string = prompt('Enter the string');

const letterString = prompt('Enter the checking character');

const value = RepeatChar(string, letterString);

console.log(value);