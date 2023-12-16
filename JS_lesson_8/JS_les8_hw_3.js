<!--    'JS_les8_hw_3.js'-->
<!-- - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:-->

<!--&#45;&#45; drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`-->
<!--&#45;&#45; info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`-->
<!--&#45;&#45; increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed-->
<!--&#45;&#45; changeYear (newValue) - змінює рік випуску на значення newValue-->
<!--&#45;&#45; addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car-->

function Car (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function() {
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.volume);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newYear) {
        this.year = newYear;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car1 = new Car('ferrari','manufacturer',1998,360,50);
car1.drive();
car1.info();
car1.increaseMaxSpeed(51);
car1.changeYear(2001);
car1.driver({name:'Parampam', age:31})


