<!-- - створити функцію яка створює параграф з текстом. Текст задати через аргумент-->
<!-- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий-->
<!-- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)-->


<!-- - створити функцію яка створює параграф з текстом. Текст задати через аргумент-->
function foobar() {
    document.write(`<p>${arguments[0]}</p>`);
}
foobar('Paragraph');


<!-- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий-->
function create () {

    document.write(`<ul>`);

        for (i = 0; i < 3; i++){
            document.write(`<li>${arguments[0]}</li>`)
        }

    document.write(`</ul>`);

}
create('Li');


<!-- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)-->
function create2 () {

    document.write(`<ul>`);

    for (i = 0; i < arguments[0]; i++){
        document.write(`<li>${arguments[1]}</li>`)
    }

    document.write(`</ul>`);

}
create2(5,'li_2');


