/* 
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

function getOrder(input) {
  const menuItems = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ];
  let newStr = "";

  let index = 1;
  let temp = input[0];

  while (index < input.length) {
    let currentChar = input[index];
    if (temp.length >= 4) {
      let indexOfTemp = menuItems.indexOf(temp);
      if (indexOfTemp > -1) {
        newStr += ` ${temp[0].toUpperCase()}${temp.slice(1).toLowerCase()}`;
        temp = currentChar;
      } else {
        temp += currentChar;
      }
    } else if (/[a-zA-Z]/.test(currentChar)) {
      temp += currentChar;
    }
    index++;
  }

  if (temp.length >= 4) {
    let indexOfTemp = menuItems.indexOf(temp);
    if (indexOfTemp > -1) {
      newStr += ` ${temp[0].toUpperCase()}${temp.slice(1).toLowerCase()}`;
    }
  }

  const arr = newStr.split(" ");
  let finalStr = "";

  for (let i = 0; i < menuItems.length; i++) {
    let currentMenuItem = menuItems[i];
    let filterArr = arr.filter(
      (word) =>
        word ===
        currentMenuItem[0].toUpperCase() +
          currentMenuItem.slice(1).toLowerCase()
    );
    if (filterArr.length > 0) {
      finalStr += `${filterArr.join(" ")} `;
    }
  }
  return finalStr.trim();
}
