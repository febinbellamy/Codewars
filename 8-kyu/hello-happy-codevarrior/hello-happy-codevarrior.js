class Warrior {
  constructor(n) {
    this.currentName = n;
  }
  name(newName) {
    if (newName) {
      this.currentName = newName;
    } 
    return this.currentName;
  }
}
​
Warrior.prototype.toString = function() {
    return "Hi! my name's "+ this.name();
}