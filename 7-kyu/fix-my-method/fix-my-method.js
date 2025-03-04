function myFunction() {
  const myObject = {
    objProperty: "string", 
    objMethod() {
      return this.objProperty;
    }
  }
  return myObject;
};
​