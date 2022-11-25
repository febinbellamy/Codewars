/* 
5 kyu

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  if (seconds === 0) return `00:00:00`;

  let total = seconds;
  let integer;
  let hours = "00";
  let minutes = "00";
  let days = "00";
  let secs = "00";

  if (total / 3600 >= 1) {
    integer = parseInt(String(total / 3600));
    total -= 3600 * integer;
    hours = `${integer}`;
  }

  if (total / 60 >= 1) {
    integer = parseInt(String(total / 60));
    total -= 60 * integer;
    minutes = `${integer}`;
  }

  if (total / 1 >= 1) {
    integer = parseInt(String(total / 1));
    total -= 1 * integer;
    secs = `${integer}`;
  }

  return `${String(hours).length === 1 ? "0" : ""}${hours}:${
    String(minutes).length === 1 ? "0" : ""
  }${minutes}:${String(secs).length === 1 ? "0" : ""}${secs}`;
}
