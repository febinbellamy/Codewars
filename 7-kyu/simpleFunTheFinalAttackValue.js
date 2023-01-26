/* 
7 kyu

John is playing a RPG game. The initial attack value of the player is x. The player will face a crowd of monsters. Each monster has different defense value.

If the monster's defense value is less than or equal to the player's attack value, the player can easily defeat the monster, and the player's attack value will increase. The amount increased is equal to the monster's defense value.

If the monster's defense value is greater than the player's attack value, the player can still defeat monsters, but the player's attack value can only be increased little, equal to the greatest common divisor of the monster's defense value and the player's current attack value.

The defense values for all monsters are provided by monsterList/monster_list. The player will fight with the monsters from left to right.

Please help John calculate the player's final attack value.

Example
For x = 50, monsterList=[50,105,200], the output should be 110.

The attack value increased: 50 --> 100 --> 105 --> 110

For x = 20, monsterList=[30,20,15,40,100], the output should be 205.

The attack value increased:
20 --> 30 --> 50 --> 65 --> 105 --> 205
*/

function finalAttackValue(x, monsterList) {
  //coding and coding..

  let attackValue = x;
  let i = 0;

  while (i < monsterList.length) {
    if (monsterList[i] <= attackValue) {
      attackValue += monsterList[i];
    } else if (monsterList[i] > attackValue) {
      let greatestCommonDivisor = 1;
      let counter = 0;
      while (counter < monsterList[i]) {
        if (monsterList[i] % counter === 0 && attackValue % counter === 0) {
          greatestCommonDivisor = counter;
        }
        counter++;
      }
      attackValue += greatestCommonDivisor;
    }
    i++;
  }
  return attackValue;
}
