abstract class Shape {
    constructor(protected width: number, protected length: number) { }
    abstract calculateSize(): number;
}

class Rectangle extends Shape {

    constructor(width: number, length: number){
        super(width, length);
    }

    calculateSize() {
        return this.width * this.length;
    }
}

let recObj = new Rectangle(5, 2);
recObj.calculateSize();