/*
7 kyu

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:
"Sky scra per" -> "Skyscraper"

If the building contains no ghosts, return the string:
"You just wanted my autograph didn't you?"
*/

function ghostBusters(building) {
  let ghostsRemoved = 0;
  let result = "";
  for (let i = 0; i < building.length; i++) {
    building[i] === " " ? ghostsRemoved++ : (result += building[i]);
  }
  return ghostsRemoved === 0
    ? "You just wanted my autograph didn't you?"
    : result;
}
