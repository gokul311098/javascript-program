function email(mailid) {

    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(mailid)) {
        console.log(`The ${mailid} is correct`);
    }
    else {
        console.log(`The ${mailid} is incorrect`);
    }

}

email('abc@gmail.com');
email('ads@.com');