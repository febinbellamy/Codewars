function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  const finalSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
  const totalSecondsFromSharkToPontoon = sharkDistance / finalSharkSpeed;
  const totalSecondsMeToPontoon = pontoonDistance / youSpeed;
  return totalSecondsMeToPontoon < totalSecondsFromSharkToPontoon ? "Alive!" : "Shark Bait!"
}