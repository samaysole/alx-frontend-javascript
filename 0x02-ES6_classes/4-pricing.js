import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // amount
  get amount() {
    return this.amount;
  }

  set amount(value) {
    this.amount = value;
  }

  // currency
  get currency() {
    return this.currency;
  }

  set currency(value) {
    this.currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
