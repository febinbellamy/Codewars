function solution(start, finish) {
  let numberOfJumps = 0;
  let currentShelf = start;
  while(currentShelf < finish) {
    if (currentShelf + 3 <= finish) {
      currentShelf += 3;
      numberOfJumps++;
    } else {
      currentShelf += 1;
      numberOfJumps++
    } 
  }
  return numberOfJumps;
}