// Get Coding :)
​
class Shark extends Animal {
  legs = 0;
  species = "shark";
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
  }
}
​
class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
  legs = 4;
  species = "cat";
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}
​
class Dog extends Animal {
  legs = 4;
  species = "dog";
  constructor(name, age, status, master){
    super(name, age);
    this.status = status;
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}