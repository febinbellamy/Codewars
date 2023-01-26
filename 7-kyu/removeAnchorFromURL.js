/*
7 kyu

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
    let newString = "";
      for (let i = 0; i < url.length; i++) {
        let currentChar = url[i];
        if (currentChar !== "#") {
          newString += currentChar;
          
        } else if (currentChar === "#") {
          return newString;
          
        }
      }  
      return newString;
}