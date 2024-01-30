/* 
7 kyu

A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!

How many kookaburras are there?

Hint
The trick to counting kookaburras is to listen carefully
– The males sound like HaHaHa...
– The females sound like hahaha...
– And they always alternate male/female

Examples
ha = female => 1
Ha = male => 1
Haha = male + female => 2
haHa = female + male => 2
hahahahaha = female => 1
hahahahahaHaHaHa = female + male => 2
HaHaHahahaHaHa = male + female + male => 3
*/

var kookaCounter = function (laughing) {
  // Your code here!
  if (laughing.length <= 1) return 0;
  let mostRecentLaugh = laughing[0] + laughing[1];
  let counter = 1;
  let pointer1 = 2;
  let pointer2 = 3;
  while (pointer2 < laughing.length) {
    let currentLaugh = laughing[pointer1] + laughing[pointer2];
    if (currentLaugh !== mostRecentLaugh) {
      mostRecentLaugh = currentLaugh;
      counter++;
    }
    pointer1 += 2;
    pointer2 += 2;
  }
  return counter;
};
