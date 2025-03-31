class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}
​
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} makes a noise, ${this.name} goes meow.`;
  }
}