// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let length = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].length);
        console.log(arr[i].toUpperCase());
        console.log(arr[i].toLowerCase());
    }
}
length(['hello world', 'lorem ipsum', 'javascript is cool']);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';

let cleaner = (str) => {
    console.log(str);
    console.log(str.trim());
}

cleaner(' dirty string   ');

// let cleaner = (str) => {
//     console.log(str);
//     if (str[0] === ' ') {
//             for (let i = 0; i < str.length; i++) {
//                 if (str[0] === ' ') {
//                     str = str.replace(str[0], '');
//                 }
//                     i++;
//                 } else if (str[0] === str[i+1])
//
//             }
//         }
//     }
//
//     console.log(str);
// }

// cleaner(' dirty string   ')




// console.log(str.replace(str[4], ''));

// let firstSpace = (str) =>
// {
//     while (str[0] === ' ') do str[0].shift();
// }
//
// for (let i = 1; i < str.length; i++) {
//     if (str[i] === ' ') firstSpace
//
// }