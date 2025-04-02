//extend the dog prototype with the checkDog method.
Dog.prototype.checkDog = function() {
  if (this.vaccinated && this.wormed) {
    return `${this.name} can be accepted`
  } else if (this.vaccinated || this.wormed) {
    return `${this.name} can only be accepted by itself`
  } else {
    return `${this.name} can not be accepted`
  }
}