class Cuboid {
  // TODO:
  constructor(length, width, height) {
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
class Cube extends Cuboid {
  // TODO:
  constructor(length, width, height) {
    super(width, height);
    this.length = length;
    this.width = length;
    this.height = length;
  }
}