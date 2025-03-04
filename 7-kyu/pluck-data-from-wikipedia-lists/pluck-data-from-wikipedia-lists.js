function pluck(data, property) {
  // data - An Array of Objects
  // property - A String representing the property from which to pluck data
  return data.map((obj) => obj[property])
}