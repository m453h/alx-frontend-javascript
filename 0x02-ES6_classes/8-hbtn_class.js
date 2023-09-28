export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new Error('TypeError: Size must be a number');
    }

    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new Error('TypeError: Location must be a string');
    }
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new Error('TypeError: Size must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new Error('TypeError: Location must be a string');
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    return this.size;
  }
}
