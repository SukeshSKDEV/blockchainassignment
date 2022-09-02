class Rectangle {
  constructor(__width, __height) {
    this.width = __width;
    this.height = __height;
  }

  area() {
    return `Area = ${this.width * this.height}`;
  }
}

class Square extends Rectangle {
  constructor(__width) {
    super(__width);
    this.width = __width;
    this.height = __width;
  }
}

let square = new Square(5);
console.log(square.area());
