function archersReady(archers){
  // arrow it
  return archers.length > 0 && archers.every(archer => archer >= 5);
}