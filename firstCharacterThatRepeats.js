/* 
6 kyu

Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.

*/

function firstDup(s) {
  // your solution here
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) > i) return s[i];
  }
}
