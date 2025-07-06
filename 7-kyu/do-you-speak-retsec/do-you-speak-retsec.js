function reverseByCenter(s){
  let firstChunk;
  let secondChunk;
  if (s.length % 2 === 0) {
    firstChunk = s.slice(0, s.length/2);
    secondChunk = s.slice(s.length/2);
  } else {
    const middleIndex = Math.floor(s.length / 2);
    firstChunk = s.slice(0, middleIndex);
    secondChunk = s.slice(middleIndex + 1) + s[middleIndex];
  }
  return secondChunk + firstChunk;
}