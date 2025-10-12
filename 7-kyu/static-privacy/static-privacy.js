class Class {
  static #foo = 42;
​
  static get foo() {
    return Class.#foo;
  }
}