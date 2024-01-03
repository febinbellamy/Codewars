/* 
6 kyu

I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/

function validPass(password) {
  if (password.length <= 3 || password.length >= 20) return "INVALID";

  let lettersCount = 0;
  let numbersCount = 0;
  for (let i = 0; i < password.length; i++) {
    if (/[a-zA-Z0-9]/.test(password[i])) {
      /[0-9]/.test(password[i]) ? numbersCount++ : lettersCount++;
    } else {
      return "INVALID";
    }
  }
  if (lettersCount === 0 || numbersCount === 0) return "INVALID";
  return "VALID";
}
