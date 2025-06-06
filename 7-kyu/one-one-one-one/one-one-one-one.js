function consecutiveOnes(nums) {
   //code me
  let maxConsecutiveOnes = -Infinity;
  let currentCount = 0;
  let index = 0;
  while (index < nums.length) {
    let currentNum = nums[index];
    if (currentNum === 1) {
      currentCount++;
    } else {
      if (currentCount > maxConsecutiveOnes) {
        maxConsecutiveOnes = currentCount;
      }
      currentCount = 0;
    }
    index++;
  }
   if (currentCount > maxConsecutiveOnes) {
     maxConsecutiveOnes = currentCount;
   }
  return maxConsecutiveOnes;
};
​