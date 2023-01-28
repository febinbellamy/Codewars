/* 
7 kyu

Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input
You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output
The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.
*/

function time(distance, boatSpeed, stream) {
  //Write your own Code!
  const streamArr = stream.split(" ");
  return streamArr[0] === "Downstream"
    ? +(distance / (boatSpeed + +streamArr[1])).toFixed(2)
    : +(distance / (boatSpeed - +streamArr[1])).toFixed(2);
}
