import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new Error('TypeError: Amount must be a number');
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('TypeError: Currency must be instance of currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new Error('TypeError: Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('TypeError: Currency must be instance of currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new Error('TypeError: ConversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
