function iTri(s){
//its gonna be a long day!
  const distanceLeft = `${(140.60 - s).toFixed(2)} to go!`;
  if (s === 0) {
    return "Starting Line... Good Luck!";
  } else if (s <= 2.40) {
    return {"Swim": distanceLeft};
  } else if (s <= 113) {
    return {"Bike": distanceLeft};
  } else if (s <= 130.60) {
    return {"Run": distanceLeft};
  } else if (s < 140.60) {
    return {"Run": "Nearly there!"}
  } else if (s >= 140.60) {
    return "You're done! Stop running!"
  }
}