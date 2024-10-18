/* 
7 kyu

Convert a hash into an array. Nothing more, Nothing less.
{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into
[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Good Luck!
*/

function convertHashToArray(hash) {
  const result = [];
  for (let key in hash) result.push([key, hash[key]]);
  return result;
}
