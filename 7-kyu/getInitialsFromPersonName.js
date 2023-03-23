/* 
7 kyu

Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

Note: initials should be separated with a space.
*/

function toInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0] + ".")
    .join(" ");
}
