/* 
7 kyu

Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.

Examples
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
*/

function capital(capitals) {
  //...

  const sentences = [];

  for (let i = 0; i < capitals.length; i++) {
    let currentObj = capitals[i];
    let capital = currentObj["capital"];
    let stateOrCountry = currentObj["state"] ? "state" : "country";
    let sentence = `The capital of ${currentObj[stateOrCountry]} is ${capital}`;
    sentences.push(sentence);
  }
  return sentences;
}
