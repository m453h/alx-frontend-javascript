export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string' || brand === undefined) {
      this._brand = brand;
    } else {
      throw new Error('TypeError: Brand must be a string');
    }

    if (typeof motor === 'string' || motor === undefined) {
      this._motor = motor;
    } else {
      throw new Error('TypeError: Motor must be a string');
    }

    if (typeof color === 'string' || color === undefined) {
      this._color = color;
    } else {
      throw new Error('TypeError: Color must be a string');
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ClonedInstance = this.constructor[Symbol.species];
    return new ClonedInstance();
  }
}
