function linuxType(fileAttribute) {
  let firstChar = fileAttribute[0];
  if (firstChar === "-") {
    return "file"
  } else if (firstChar === "d") {
    return "directory"
  } else if (firstChar === "l") {
    return "symlink"
  } else if (firstChar === "c") {
    return "character_file"
  } else if(firstChar ==="b") {
    return "block_file"
  } else if (firstChar === "p") {
    return "pipe"
  } else if (firstChar === "s") {
    return "socket"
  } else if (firstChar === "D") {
    return "door";
  }
}