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

function createArrayObjects() {
    document.write(`<ul>`);

    for (const argument of arguments) {
            document.write(`<li>`);
            for (const argumentKey in argument) {
            document.write(`${argumentKey}: ${argument[argumentKey]} `)
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


// for ( const user of users) {
//     if (user.status) {
//         document.write(`<li>`);
//
//         for (const userKey in user) {
//             document.write(`${userKey} - ${user[userKey]} `)
//         }
//     }
// }