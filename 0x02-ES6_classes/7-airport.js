export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

Airport.prototype.toString = function airportToString() {
  return `[object ${this.code}]`;
};
