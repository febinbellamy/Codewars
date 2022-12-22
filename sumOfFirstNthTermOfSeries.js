/* 
7 kyu

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
- You need to round the answer to 2 decimal places and return it as String.
- If the given value is 0 then it should return 0.00
- You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n) {
  if (n === 0) return "0.00";

  let totalSum = 1;
  let counter = 1;
  let denominator = 4;

  while (counter < n) {
    totalSum += 1 / denominator;
    counter++;
    denominator += 3;
  }
  const totalSumRounded = Math.round(totalSum * 100) / 100;

  return `${totalSumRounded}${parseInt(totalSum) === totalSum ? ".00" : ""}${
    totalSumRounded.toString().length === 3 ? "0" : ""
  }`;
}
