let cardDeck = [];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cardSuits = ['spade', 'clubs', 'heart', 'diamond'];
let colors = ['black', 'red'];
for (let suit of cardSuits) {
    for (let val of values) {
        let card = {
            cardSuit: suit,
            value: val,
        }
        cardDeck.push(card);
    }
}
for (c of cardDeck){
    switch (c.cardSuit){
        case 'spade' : c.color = 'black';
            break;
        case 'clubs' : c.color = 'black';
            break;
        case 'heart' : c.color = 'red';
            break;
        case 'diamond' : c.color = 'red';
            break;
    }
}
console.log(cardDeck);



const foo = (value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
}

const mapArr = coursesAndDurationArray.map(foo);
console.log(mapArr);

for (const mapArrElement of mapArr) {

}

for (let i = 0; i < mapArr.length; i++) {
    const mapArrElement = mapArr[i];

}


const card = {cardSuit: 'spade', value: '6', color: 'black'};

console.log({cardSuit: 'wwww', ...card})


const sortNums5 = (order, ...arr) => {
    switch (order) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
        case 'descending':
            return arr.sort((a, b) => b - a);
        default:
            console.log('ERROR')
    }
}
console.log(sortNums5('ascending', 45, 456, 33, 23, -123, 11, 1, 0)); // [3,11,21]
console.log(sortNums5('descending', 3, 66, 2)); // [21,11,3]