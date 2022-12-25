var searchArray = function (arrayToSearch, query) {
  // TODO your code here

  if (query.length !== 2) throw "Error!";
  if (!Array.isArray(arrayToSearch[0])) throw "Error!";

  const checkLength = arrayToSearch
    .map((array) => array.length)
    .sort((a, b) => b - a);

  if (checkLength[0] > 2 || checkLength[0] < 2) throw "Error!";

  const filteredArr = arrayToSearch
    .map((array, index) =>
      array[0] === query[0] && array[1] === query[1] ? index : ""
    )
    .sort()
    .filter((elem) => elem !== "");

  if (filteredArr.length === 0) {
    return -1;
  }
  return filteredArr[0];
};
