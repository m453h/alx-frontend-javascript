import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string' || range === undefined) {
      this._range = range;
    } else {
      throw new Error('TypeError: Range must be a string');
    }
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const ClonedInstance = this.constructor[Symbol.species];
    return new ClonedInstance();
  }
}
