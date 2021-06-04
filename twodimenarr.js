function twoDimensional(a, b) {

    let arr = [];

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = [];
        }
    }

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 3;
const y = 3;

console.log(twoDimensional(x, y));