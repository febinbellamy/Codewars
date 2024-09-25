/* 
7 kyu

We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.

But if we don’t know the case our inputs are in, these are not very helpful.

Task:
So the task here is to implement a function (called id in Ruby/Crystal/JavaScript/CoffeeScript and case_id in Python/C) that takes a string, c_str, and returns a string with the case the input is in. The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, or if there are no 'spaces' in the input (for example in snake case, spaces would be '_'s), return “none”. Inputs will only have letters (no numbers or special characters).

Some definitions
Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores

Examples:
id(“hello-world”) #=> “kebab”
id(“hello-to-the-world”) #=> “kebab”
id(“helloWorld”) #=> “camel”
id(“helloToTheWorld”) #=> “camel”
id(“hello_world”) #=> “snake”
id(“hello_to_the_world”) #=> “snake”
id(“hello__world”) #=> “none”
id(“hello_World”) #=> “none”
id(“helloworld”) #=> “none”
id(“hello-World”) #=> “none”

Also check out my other creations — Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2
*/

function id(c_str) {
  // your code here

  function isKebabCase(str) {
    if (str.toLowerCase() !== str) return false;
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      if (i === 0 && /[^a-z]/.test(currentChar)) {
        return false;
      }
      if (currentChar === "-" && /[^a-z]/.test(str[i + 1])) {
        return false;
      }
      if (/[^a-z-]/.test(currentChar)) return false;
    }
    return true;
  }

  function isCamelCase(str) {
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      if (i === 0 && /[^a-z]/.test(currentChar)) {
        return false;
      }
      if (/[A-Z]/.test(currentChar) && /[^a-z]/.test(str[i + 1])) {
        if (/[a-z]/.test(str[i + 2])) continue;
        return false;
      }
      if (/[^a-zA-Z]/.test(currentChar)) return false;
    }
    return true;
  }

  function isSnakeCase(str) {
    if (str.toLowerCase() !== str) return false;
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      if (i === 0 && /[^a-z]/.test(currentChar)) {
        return false;
      }
      if (currentChar === "_" && /[^a-z]/.test(str[i + 1])) {
        return false;
      }
      if (/[^a-z_]/.test(currentChar)) return false;
    }
    return true;
  }

  if (isKebabCase(c_str)) {
    return "kebab";
  } else if (isCamelCase(c_str)) {
    return "camel";
  } else if (isSnakeCase(c_str)) {
    return "snake";
  } else {
    return "none";
  }
}
