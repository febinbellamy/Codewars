/* 
7 kyu

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/

function sentence(List) {
  // your code

  const keys = [];
  for (let i = 0; i < List.length; i++) {
    let currentObj = List[i];
    for (let key in currentObj) keys.push(key);
    currentObj["rank"] = +keys[i];
    currentObj["word"] = currentObj[keys[i]];
  }

  List.sort((a, b) => a.rank - b.rank);

  const sentence = [];
  for (let j = 0; j < List.length; j++) {
    sentence.push(List[j]["word"]);
  }

  return sentence.join(" ");
}
