class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
    greet() = function() {
      console.log(`hi there generalissimo kenobi ${this.name} ${this.color}`);
    }
}

module.exports = Person;
