/* 
5 kyu

It's Christmas! You had to wait the whole year for this moment. You can already see all the presents under the Christmas tree. But you have to wait for the next morning in order to unwrap them. You really want to know, what's inside those boxes. But as a clever child, you can do your assumptions already.

You know, you were a good child this year. So you may assume, that you'll only get things from your wishlist. You see those presents, you can lift them and you can shake them a bit. Now you can make you assumptions about what you'll get.

Your Task:
You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)

You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}

Your task is to return the names of all wishlisted presents that you might have gotten.

Rules
- Possible values for size: "small", "medium", "large"
- Possible values for clatters: "no", "a bit", "yes"
- Possible values for weight: "light", "medium", "heavy"
- Don't add any item more than once to the result
- The order of names in the output doesn't matter
- It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

Example
var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
*/

function guessGifts(wishlist, presents) {
  let wishlistIndex = 0;
  let presentsIndex = 0;

  const finalArr = [];

  while (wishlistIndex < wishlist.length) {
    let currentWishObj = wishlist[wishlistIndex];
    let currentPresentObj = presents[presentsIndex];
    let valuesOfCurrentPresentObj = Object.values(currentPresentObj).join("");
    let valuesOfCurrentWishObj = Object.values(currentWishObj).join("");

    if (valuesOfCurrentWishObj.includes(valuesOfCurrentPresentObj)) {
      if (!finalArr.includes(currentWishObj["name"])) {
        finalArr.push(currentWishObj["name"]);
      }
    }
    presentsIndex++;
    if (presentsIndex === presents.length) {
      presentsIndex = 0;
      wishlistIndex++;
    }
  }
  return finalArr;
}
