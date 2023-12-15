/* 
6 kyu

Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:
{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}

The returned objects must have the following structure:
{
  state: "AK",
  count: 25
}

The states must be ordered by first appearance. An error is expected if an input object doesn't have a state property.
*/

function count(addresses) {
  if (addresses.length === 0) return addresses;

  const numOfAddressesForEachState = {};

  for (let i = 0; i < addresses.length; i++) {
    let currentObj = addresses[i];
    let currentState = currentObj["state"];

    if (currentObj["state"]) {
      if (numOfAddressesForEachState[currentState]) {
        numOfAddressesForEachState[currentState] += 1;
      } else {
        numOfAddressesForEachState[currentState] = 1;
      }
    } else {
      throw new Error("Input object doesn't have a 'state' propety");
    }
  }

  const finalArr = [];

  for (let key in numOfAddressesForEachState) {
    let currentValue = numOfAddressesForEachState[key];
    finalArr.push({ state: key, count: currentValue });
  }

  return finalArr;
}
