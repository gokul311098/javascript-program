function vowels(str) {

    let a = str.match(/[aeiou]/gi);

    return a;

}

const string = prompt('Enter the string');

const value = vowels(string);
console.log(value);


//using for loop
function Vowels(str) {

    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

let vowels = ['a', 'e', 'i', 'o', 'u'];

const string = prompt('Enter the string');

const value = Vowels(string);
console.log(value);