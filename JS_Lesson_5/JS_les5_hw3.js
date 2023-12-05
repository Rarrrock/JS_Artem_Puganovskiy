<!--"JS_les5_hw3.js"-->
<!-- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-->
<!-- - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-->
<!-- - створити функцію яка повертає найменьше число з масиву-->

<!-- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-->
let listCreate = (arr) => {
    document.write('<ul>');
    {
        for (let i = 0; i < arr.length; i++)
            document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
};
listCreate([1,true,'lhlhnl']);

<!-- - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-->
let arrayObjects = (users) => {
    for (const user of users) {
        document.write(`<div>`)
        for (const userKey in user) {
            document.write(`${userKey} - ${user[userKey]}, `)
        }
        document.write(`</div>`)
    }

}
let users1 = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];
arrayObjects(users1);

<!-- - створити функцію яка повертає найменьше число з масиву-->
let minimum2 = (numbersArr) => {
    let min = numbersArr[0];
    for (i = 1; i < numbersArr.length; i++){
        if (numbersArr[i] < min) {min = numbersArr[i]}
    }
    document.write(`<li>ArayMinimun = ${min}</li>`)
}
let numbers2 = [74, 51, 76, 234, 62, 49, 237, 99];
minimum2(numbers2);