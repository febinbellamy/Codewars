class Quark{
  // Your code here.
  baryon_number = 1/3;
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
  }
  interact(anotherQuark){
    let temp = anotherQuark.color;
    anotherQuark.color = this.color;
    this.color = temp;
  }
}