declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

export class Animal implements IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  constructor(
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
  ) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 0, "shark", status);
  }
}

export class Cat extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 4, "cat", status);
  }
  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

export class Dog extends Animal {
  master: string;
  constructor(name: string, age: number, status: string, master: string) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster(): string {
    return `Hello ${this.master}`;
  }
}
