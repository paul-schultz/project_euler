//  Find palindromes in a given range, return as integers
function findPal(high, low) {
    arr = [];
    for (var i = high; i >= low ; i-- ) {
        var numStr = i.toString();
    if (numStr == numStr.split('').reverse().join('')) {
        var num = parseInt(numStr);
        arr.push(num);
        } 
    }
    return arr;
}

// Define constant that returns an array of palindromes in a given range
const palindromes = findPal(998001, 900000);

// Define a function that returns an array with the palindrome and its two 3-digit factors
function checkFactors(num) {
    var arr = [];
    for ( i = 2, j = num / 2 ; i <= j; i++ ) {
      if (num % i == 0) {
        var k = num / i;
        if (i.toString().length == 3 && k.toString().length == 3) {
          arr.push(num);
          arr.push(i);
          arr.push(k);
          let cleanOutput = [...new Set(arr)];
          console.log(cleanOutput)
        } 
      }
    }
  }

//   Iterate through the array of palindromes to find the largest palindrome product of two 3-digit factors
function largestPP() {
    palindromes.forEach(checkFactors);
}

largestPP()
 
module.exports = largestPP    