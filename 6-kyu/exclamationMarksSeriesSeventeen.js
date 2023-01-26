/* 
6 kyu

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left, right) {
  //coding and coding....

  let balanceOfLeft = 0;
  let balanceOfRight = 0;

  for (let i = 0; i < left.length; i++) {
    let currentChar = left[i];
    if (currentChar === "?") {
      balanceOfLeft += 3;
    } else if (currentChar === "!") {
      balanceOfLeft += 2;
    }
  }

  for (let j = 0; j < right.length; j++) {
    let currentChar = right[j];
    if (currentChar === "?") {
      balanceOfRight += 3;
    } else if (currentChar === "!") {
      balanceOfRight += 2;
    }
  }

  if (balanceOfRight > balanceOfLeft) return "Right";
  if (balanceOfRight < balanceOfLeft) return "Left";

  return "Balance";
}
