<!--Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт-->
<!--{-->
<!--spades:[],-->
<!--diamonds:[],-->
<!--hearts:[],-->
<!--clubs:[]-->
<!--}-->

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const result = cards.reduce((acc, cur) => {
    if (!acc[cur.cardSuit]) {
        acc[cur.cardSuit] = [];
    }
    acc[cur.cardSuit].push(cur);
    return acc;
}, {});
console.log(result);
