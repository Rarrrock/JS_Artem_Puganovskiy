<!--"JS_les4_hw3.js"-->
<!-- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-->
<!-- - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-->
<!-- - створити функцію яка повертає найменьше число з масиву-->


<!-- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-->
function createList() {
    document.write(`<ul>`);
    for (i = 0; i < arguments.length; i++) {
        document.write(`<li>${arguments[i]}</li>`);
    }
    document.write(`</ul>`);
}
createList(142, true, false, 'jjij', '325ff');


<!-- - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-->

function createArrayObjects(names) {
    document.write(`<ul>`);

    for (const name of names) {
            document.write(`<li>`);
            for (const nameKey in name) {
            document.write(`${nameKey}: ${name[nameKey]} `)
        }
    }

    document.write(`</ul>`);
}

let arrayNames = [
    {id: 2314, name: 'Name1', age: 25},
    {id: 346, name: 'Name2', age: 17},
    {id: 9373, name: 'Name3', age: 29},
    {id: 1246, name: 'Name4', age: 35},
    {id: 256, name: 'Name6', age: 48}
    ];
createArrayObjects (arrayNames);


<!-- - створити функцію яка повертає найменше число з масиву-->
function minimum(numbersArr) {
    let min = numbersArr[0];
    for (i = 1; i < numbersArr.length; i++){
        if (numbersArr[i] < min) {min = numbersArr[i]}
    }
document.write(`<li>ArayMinimun = ${min}</li>`)
}
let numbers = [74, 51, 76, 234, 62, 49, 237, 99];
minimum(numbers);

// for (const user of users) {
//     if (user.status) {
//         document.write(`<li>`);
//
//         for (const userKey in user) {
//             document.write(`${userKey} - ${user[userKey]} `)
//         }
//     }
// }

