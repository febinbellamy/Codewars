/* 
6 kyu

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/ 

var uniqueInOrder = function(iterable) { // iterable can be a string or an array
    let emptyArray = [];
      
      if (typeof iterable === 'string') {
        let strToArray = iterable.split('');
        for (let i = 0; i < strToArray.length; i++) {
          let currentElement = strToArray[i];
          let nextElement = strToArray[i + 1];
          if (currentElement === nextElement) {
            continue;
          } else {
            emptyArray.push(currentElement);
          }
        }
        return emptyArray;
    
      } else if (typeof iterable === 'object') {
        for (let i = 0; i < iterable.length; i++) {
          let currentElement = iterable[i];
          let nextElement = iterable[i + 1];
          if (currentElement === nextElement) {
            continue;
          } else {
            emptyArray.push(currentElement);
          }
        }
        return emptyArray;
      }
}