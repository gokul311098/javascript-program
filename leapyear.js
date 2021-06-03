const year = prompt('Enter the year');

if (year % 4 == 0) {
    console.log(`${year} is leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}


function leapyear(y) {

    let Y = new Date(y, 1, 29).getDate() == 29;

    if (Y) {
        return `${year1} is leap year`;
    }
    else {
        return `${year1} is not a leap year`;
    }
}

const year1 = prompt('Enter the year');

const leap1 = leapyear(year1);
console.log(leap1);