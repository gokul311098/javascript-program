function guessnum() {
    let number = parseInt(prompt('Enter the value of number'));

    let random = Math.floor(Math.random() * (10 - 1) + 1);

    if (number == random) {
        console.log('You guessed the correct number');
    }
    else {
        console.log('You guessed the wrong number');
    }
}

guessnum();