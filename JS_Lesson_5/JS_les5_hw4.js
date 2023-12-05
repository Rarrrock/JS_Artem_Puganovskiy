// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr)  => {
    let n = 0;
    for (let i = 0; i < arr.length; i++){
        n = n + arr[i];
    }
    console.log('Array Sum = ', n);
    return n;
}
sum([74, 51, 76, 234, 62, 49, 237, 99]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
let swap = (arr,index1,index2) => {
    let n = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = n;
    console.log(arr);
    return n;
}
swap([74, 51, 76, 234, 62, 49, 237, 99], 3, 7);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {

    for (i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            let result = sumUAH / currencyValues[i].value;
            console.log(result)
            return result;
        }
    }
}

exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}], 'EUR');