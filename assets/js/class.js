class Figure {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.name;
  }
  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError();
    }
    this._name = newValue;
  }
  _validate(newValue) {
    if (typeof newValue !== 'number') {
      throw new TypeError();
    }
    if (newValue <= 0) {
      throw new RangeError();
    }
  }
  getArea() {}
}
class Circle extends Figure {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }
  get radius(){
    return _radius;
  }
  set radius(newValue){
    this._validate(newValue);
    this._radius=newValue;
  }
  getArea() {
    return Math.PI * (this._radius ** 2);
  }
}
const circle = new Circle(5);
function getFigureArea(figure){
  if(figure instanceof Figure){
    return figure.getArea();
  }
  throw new TypeError();
}