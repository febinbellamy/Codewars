function anArgument(...args) {
//Your code goes here
  const numOfArgs = args.length;
  if (numOfArgs === 0) return "You didn't give me any arguments."
  let result = `You gave me ${numOfArgs} argument${numOfArgs > 1 ? "s" : ""} and ${numOfArgs > 1 ? "they are" : "it is"} `;
  for(let i = 0; i < numOfArgs; i++) {
    if (i === numOfArgs - 1 && numOfArgs > 1) {
      result += ` and "${args[i]}"`;
    } else {
      result += `"${args[i]}"${args.length === 1 || i === numOfArgs - 2 ? "" : ", "}`;
    }
  }
  return result + ".";
}