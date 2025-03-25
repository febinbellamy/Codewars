"target"; "2.4/ES6";
export class Cuboid {
  // TODO:
  constructor(public length: number, public width: number, public height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    // 2(lw + wh + lh)
    return 2 * ((this.length * this.width) + (this.width * this.height) + (this.length * this.height))
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}
​
export class Cube extends Cuboid {
  // TODO:
    constructor(length: number) {
      super(length, length, length);
    }
}