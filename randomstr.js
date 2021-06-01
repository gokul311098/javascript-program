function randomString(length) {

    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() * characters.length);
    }
    console.log(result);    
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const string = randomString(5)