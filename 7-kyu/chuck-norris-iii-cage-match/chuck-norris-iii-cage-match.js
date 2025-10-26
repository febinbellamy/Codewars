function headSmash(array) {
  // This is gonna hurt!
  if (typeof array === "number") return "This isn't the gym!!";
  if (array.length === 0) return "Gym is empty";
  return array.map((elem) => elem.replaceAll("O", " "));
}