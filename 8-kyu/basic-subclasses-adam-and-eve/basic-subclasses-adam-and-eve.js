class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man(), new Woman()];
  }
}
​
class Human {}
class Man extends Human {}
class Woman extends Human {}