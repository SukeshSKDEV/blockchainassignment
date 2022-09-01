class Cylinder {
  constructor(__radius, __height) {
    this.radius = __radius;
    this.height = __height;
  }
  getVolume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

let objCylinder = new Cylinder(7, 12);
console.log(objCylinder.getVolume());

class Sphere {
  constructor(__radius) {
    this.radius = __radius;
  }
  getVolume() {
    return ((4 / 3) * (Math.PI * this.radius ** 3)).toFixed(4);
  }
}
let objSphere = new Sphere(7);
console.log(objSphere.getVolume());

class Cone {
  constructor(__radius, __height) {
    this.radius = __radius;
    this.height = __height;
  }
  getVolume() {
    return ((1 / 3) * (Math.PI * this.radius ** 2) * this.height).toFixed(4);
  }
}
let objCone = new Cone(7, 12);
console.log(objCone.getVolume());
