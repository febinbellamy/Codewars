function ìsZeroBalanced(n){
  if (!n.length) return false;
  let sum = 0;
  const visited = {};
  for (let num of n) {
    if (num === 0) continue;
    if (num in visited) {
      visited[num]++;
    } else {
      visited[num] = 1;
    }
    sum += num;
  }
  if (sum !== 0) return false;
  for(let number in visited) {
    if (!(visited[-number])) return false;
  }
  return true;
}