<!-- - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б-->
<!-- - створити функцію яка обчислює та повертає площу кола з радіусом r-->
<!-- - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r-->
<!-- - створити функцію яка приймає масив та виводить кожен його елемент-->


<!-- - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б-->
let a = 256;
let b = 89;
function areaRectangle (sideA, sideB) {
    return sideA * sideB;
}
console.log('Площа Прямокутника = ', areaRectangle(a,b));


<!-- - створити функцію яка обчислює та повертає площу кола з радіусом r-->
let r = 12;
function areaRound (radius) {
    return Math.PI * radius * radius;
}
console.log('Площа Кола = ', areaRound(r));


<!-- - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r-->

let h = 18;
function areaCylinder (radius, height) {
    return (2 * Math.PI * radius * (height + radius));
}
console.log('Площа Циліндра = ', areaCylinder(r,h));


<!-- - створити функцію яка приймає масив та виводить кожен його елемент-->

let arr = [1,4,7,234,8,1]
function output (a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
output(arr);







// function areaRectangle (sideA, sideB) {
//     document.write('<li>${sideA * sideB}</li>')
//     return sideA * sideB;
// }
//
// areaRectangle(a,b);
