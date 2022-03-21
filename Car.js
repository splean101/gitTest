'use strict';


class Car() {
    constructor(model, color, gear){
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

const car1 = new Car('tesla', 'blue')
console.log(car1.gear);
car1.color = 'green';
car1.changeGear(5);
console.log(car1.gear);
