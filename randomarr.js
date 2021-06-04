function randomArr(arr) {

    let randomarray = Math.floor(Math.random() * arr.length);

    let a = arr[randomarray];

    return a;
}

const array = [1, 'hello',{name:'sam'}, 4, 5];

let result = randomArr(array);

console.log(result);