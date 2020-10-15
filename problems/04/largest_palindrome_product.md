## Problem 04: Largest palindrome product
From projecteuler.net:
> A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.

Project Euler has stepped it up a notch on me once again. It seems that about half as many people have finished problem 04 compared to problem 01, to the tune of about 478,503 people jumping ship at the time of me writing this. To put that into perspective, the number of people that called it quits after 3 problems is larger than the population of Iceland.

A palindrome is defined on Wikipedia as: 
> A word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam, racecar.

Or tacocat. Tacocat is also a palindrome. 

To get my start for this problem I did quite a bit of educated guessing. The question states that the largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99. So if I am going to find the largest palindromic product of two 3-digit numbers, I am not going to want to start my iterating at 0. 

So if the largest possible number from two 3-digit numbers is 998001 = 999 x 999, and the largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99, then I have good reason to believe that creating a function that returns an array of every palindromic number from 900000 to 998001 will be a great start to my search for a solution.  

One thing I noticed in this problem that I had to manipulate data types quite a bit to get everything to work nicely. My first function `findPal(high, low)` takes a high low range as an input and iterates through it one integer at a time, checking if a number is a palindrome, and if it is, then the number is pushed to an array. So how do you check if a number is the same forwards as it is backwards? Well it turns out that you want to start by converting the number to a string, this way you can use the methods `split`, `reverse`, and `join` if the split, reversed, and joined string is equal to the original string, you have a palindrome! After the condition proves to be true, the string gets turned back into an integer with `parseInt` and added to an array which will become the final output. My completed `findPal(high, low)` function looks like this: 
```
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
```
Next I defined a constant `palindromes` equal to `findPal(998001, 900000)` to save the array to be used later. In case anybody was wondering, there are 98 palindromic numbers from 900000 to 998001.
```
const palindromes = findPal(998001, 900000);
```
My next mission was to write a function `checkFactors(num)`  that would be able to take a number, use iteration to find all of its factors, then out of those factors, determine whether there are any 3-digit combinations, and if true, add those two factors to an array along with the original number. I already used a version of this function in the largest prime factor problem, so I just added in some logic that converts each combination of factors into strings, and if their lengths are both equal to 3 then an array is returned with all three numbers. The finished function looks like this: 
```
function checkFactors(num) {
    var arr = [];
    for ( i = 2, j = num / 2 ; i <= j; i++ ) {
      if (num % i == 0) {
        var k = num / i;
        // Change this number to check length of both factors
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
```
Now for the grand finale, `checkFactors(num)` only takes one number at a time, so what I ended up having to do was write one final function to find the the largest Palindrome Product once and for all. The aptly named `largestPP()` (sorry I had to) iterates through `const = palindromes` with a forEach loop that calls the `checkFactors` function. Remember `palindromes` contains 98 palindromes. So when we call the function `largestPP()` it gives the output in the format `[ 906609, 913, 993 ]`, which tells us that out of the array of 98 palindromes, there is a palindrome 906609 that is a product of 913 and 993. So with a little reasoning at the beginning and three functions later, we have a solution that turns out to be correct.