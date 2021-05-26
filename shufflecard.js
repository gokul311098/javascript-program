var family = ["spade", "diamond", "clever", "heart"];
var values = ["ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

var deck = [];

for (let i = 0; i < family.length; i++) {
    for (let j = 0; j < values.length; j++) {
        let card = { family: family[i], values: values[j] };
        deck.push(card);
    }
}

for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
} 

console.log('The random shuffle cards are:')

for (let i = 0; i < 13; i++) {
    console.log(`${deck[i].values} of ${deck[i].family}`);
}