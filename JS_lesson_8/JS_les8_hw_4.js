<!-- - (Те саме, тільки через клас)-->
<!--Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:-->
<!--&#45;&#45; drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`-->
<!--&#45;&#45; info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`-->
<!--&#45;&#45; increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed-->
<!--&#45;&#45; changeYear (newValue) - змінює рік випуску на значення newValue-->
<!--&#45;&#45; addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car-->


class Car2 {
    constructor(model, producer, year, maxSpeed, volume){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.volume);
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear (newYear) {
        this.year = newYear;
    }

    addDriver (driver) {
        this.driver = driver;
    }
}

const car2 = new Car2('Mitsu','producer',2011,270,40);
car2.drive();
car2.info();
car2.increaseMaxSpeed(21);
car2.changeYear(2015);
car2.addDriver({name:'Palala', age:21});