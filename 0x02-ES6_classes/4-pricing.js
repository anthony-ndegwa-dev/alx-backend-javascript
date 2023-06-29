import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : 0;
    this._currency = currency instanceof Currency ? currency : null;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    if (this._currency instanceof Currency) {
      return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }
    return '';
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
