function checkObject(obj) {

    let arr = Array.isArray(obj);

    if (arr) {
        console.log(`[${object}] is Array`);
    }
    else {
        console.log(`[${object}] is not an Array`);
    }
}

const object = [1, 2, 3];

checkObject(object);

console.log(typeof(object));