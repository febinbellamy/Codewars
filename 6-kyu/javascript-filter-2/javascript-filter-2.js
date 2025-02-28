function roomMates( rooms, floor ){
  const result = [];
  let currentFloor = 1;
  for(let i = 0; i < rooms.length; i++) {
    let currentOccupant = rooms[i]
    if (i > 0 && i % 6 === 0) {
      currentFloor++;
    }
    if (currentFloor === floor) {
      result.push(rooms[i]);
    }
  }
  return result.filter(occupant => occupant !== "");
}
​