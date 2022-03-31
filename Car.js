'use strict';

class Car {
    constructor(model, color = 'white', gear = 0){
		this.model = model;
		this.color = color;
		this.gear = gear;
	}
    changeGear (gear) {
		if (typeof gear === 'number' && gear > 0 && gear <= 5) {
			this.gear = gear;
		} else {
			alert('gear must be a number beetwen 1 and 5')
    }
}
};

const car1 = new Car('tesla')
console.log(car1);
car1.color = 'green';
car1.changeGear(5);
console.log(car1.gear);

/*Напишите функцию принимающую строку с именем файла и возвращающую
расширение (фрагмент после последней точки). 
В случае отсутствия в строке расширения - выбрасывать исключение.
Слишком долго ищу решение, давайте дальше*/
