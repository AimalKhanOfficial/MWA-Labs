class Car {
    constructor(public name: String, public acceleration: number = 0) { }
    honk() {
        console.log(`${this.name} is saying Toooooot!`);
    }
    accelerate(speed: number) {
        return this.acceleration += speed;
    }
}


let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);