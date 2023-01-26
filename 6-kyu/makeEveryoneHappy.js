/* 
6 kyu

We often use smiley faces in correspondence with other people. They allow us to quickly show our reaction to the person(s) we are talking to.

But one day you wanted to make your correspondence more joyful. So today you have the opportunity to make it happen.

Task:
In this kata, your task will be to replace sad emoticons with funny ones.

The emoticons, will be represented from:
- Eyes: marked as :, ; or =
- Nose (optional): marked as - or ~
- Mouth: marked as ( or [

Examples:
smile("Howdy :(")  // should return "Howdy :)"
smile("Never be sad =[")  // should return "Never be sad =]"
smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"
*/

function smile(text) {
  let newStr = text;
  const unHappyFaces = [
    ":-(",
    ":(",
    ":-[",
    ";-[",
    ";~[",
    ";-(",
    ";(",
    ":~(",
    ";~(",
    "=-[",
    ";[",
    ":[",
    ":~[",
    "=-(",
    "=(",
    "=~(",
    "=[",
    "=~[",
  ];

  function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }

  for (let i = 0; i < unHappyFaces.length; i++) {
    let currentUnhappyFace = unHappyFaces[i];

    if (newStr.includes(currentUnhappyFace)) {
      let newFace = currentUnhappyFace.slice(0, currentUnhappyFace.length - 1);

      if (currentUnhappyFace[currentUnhappyFace.length - 1] === "[") {
        newFace += "]";
      } else {
        newFace += ")";
      }

      let replacedWithSmile = replaceAll(newStr, currentUnhappyFace, newFace);
      newStr = replacedWithSmile;
    }
  }
  return newStr;
}
