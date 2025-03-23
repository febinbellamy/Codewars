interface IGeometricFigure {
  num: number;
  area: () => number;
  perimeter: () => number;
}
​
export class Square implements IGeometricFigure {
  // TODO:
  num: number;
  constructor(num: number) {
    this.num = num;
  }
  area(): number {
    return this.num * this.num;
  }
  perimeter(): number {
    return 4 * this.num;
  }
}
​
export class Circle implements IGeometricFigure {
  // TODO:
  num: number;
  constructor(num: number) {
    this.num = num;
  }
  area(): number {
    return Math.PI * (this.num ** 2);
  }
  perimeter(): number {
    return 2 * Math.PI * this.num; 
  }
}