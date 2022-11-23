/* 
5 kyu

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
  if (str === "") return false;
  let finalStr = "#";
  let trimmedStr = str.trim();

  for (let i = 0; i < trimmedStr.length; i++) {
    let currentChar = trimmedStr[i];
    if (currentChar === " ") continue;
    if (trimmedStr[i - 1] === " " || i === 0) {
      finalStr += trimmedStr[i].toUpperCase();
    } else {
      finalStr += trimmedStr[i];
    }
  }
  if (finalStr.length === 1) return false;
  if (finalStr.length > 140) return false;
  return finalStr;
}
