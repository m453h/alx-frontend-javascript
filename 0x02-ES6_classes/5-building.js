export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('TypeError: Sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('TypeError: Sqft must be a number');
    }
  }
}
