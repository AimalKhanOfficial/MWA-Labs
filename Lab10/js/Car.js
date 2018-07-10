"use strict";
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log(this.name + " is saying Toooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        return this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
