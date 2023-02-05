/* 
7 kyu

You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.
*/

function select(arrSearch, arrTake) {
  arrSearch.sort().reverse();
  const thirdLetter = arrSearch[2][2];
  const filteredArrTake = arrTake.filter((word) => word[0] === thirdLetter);
  return filteredArrTake.length >= 1 ? filteredArrTake[0] : "Nothing here";
}
