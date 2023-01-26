/*
7 kyu

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
    let sum = 0;
    let lowestNum1 = Math.min(...numbers);
    let indexOfLowestNum1 = numbers.indexOf(lowestNum1);
    numbers.splice(indexOfLowestNum1, 1);
    
    let lowestNum2 = Math.min(...numbers);
    let indexOfLowestNum2 = numbers.indexOf(lowestNum2);
    numbers.splice(indexOfLowestNum2, 1);
   
    sum += lowestNum2 + lowestNum1;
      
    return sum;
}
