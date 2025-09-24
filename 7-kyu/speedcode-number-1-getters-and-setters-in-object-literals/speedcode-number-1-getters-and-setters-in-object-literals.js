// Ready, get set, GO!!! :D
const person = { 
  "firstName": "Jane", 
  "lastName": "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(fullName) {
    const [fName, lName] = fullName.split(" ");
    this["firstName"] = fName;
    this["lastName"] = lName;
  },
};