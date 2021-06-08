const a = 5;
console.log(a);

//block scoped
{
    const b = 12;
    console.log(b);
}

/* //a = 23;
console.log(a); // throw error

const x; // throw error missing initializer */

const arr = ['apple', 'grapes'];
console.log(arr);

arr[2] = 'orange';
console.log(arr);