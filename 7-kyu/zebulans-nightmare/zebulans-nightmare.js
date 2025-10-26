function zebulansNightmare(name) {
  // don't be like zebulan!
  return name.split("_").map((word, idx) => idx > 0 ? word[0].toUpperCase() + word.slice(1) : word).join("")
}
​