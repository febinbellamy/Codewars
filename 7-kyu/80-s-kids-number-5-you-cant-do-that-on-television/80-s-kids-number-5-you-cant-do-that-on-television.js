function bucketOf(str) {
  // Watch what you say!
  const lowerCasedStr = str.toLowerCase();
  const strIncludesWater = ["water", "wet", "wash"].some((word) => lowerCasedStr.includes(word))
  const strIncludesSlime = ["slime", "i don't know"].some((word) => lowerCasedStr.includes(word))
  if (strIncludesWater && strIncludesSlime) return "sludge";
  if (strIncludesWater) return "water";
  if (strIncludesSlime) return "slime";
  return "air";
}