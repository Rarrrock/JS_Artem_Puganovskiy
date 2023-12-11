<!-- - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.-->
let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
<!-- - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.-->
<!-- - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.-->
<!--let nums = [11,21,3];-->
// <!--sortNums(nums,'ascending') // [3,11,21]-->
// <!--sortNums(nums,'descending') // [21,11,3]-->

let stringToarray = (str) => {
    console.log(str);
    console.log(str.split(' '));
}
stringToarray(str);

// <!-- - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.-->

let arr = [10,8,-7,55,987,-1011,0,1050,0];
let numToString = arr.map((num) => num.toString());
console.log(arr);

<!-- - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.-->
<!--let nums = [11,21,3];-->
// <!--sortNums(nums,'ascending') // [3,11,21]-->
// <!--sortNums(nums,'descending') // [21,11,3]-->
const sortNums = (nums, order) => {
    switch (order) {
        case 'ascending':
            return nums.sort((a, b) => a - b);
        case 'descending':
            return nums.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


