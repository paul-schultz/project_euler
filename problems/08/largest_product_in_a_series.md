## Problem 08: Largest Product in a Series

From projecteuler.net:

> The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832. Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

This was another problem that was pretty straightforward. You have a 1000 digit number, and out of all of the adjacent combinations of a specified number of digits, you want to find the combination of 13 digits that produces the largest possible product. Sounds like some more iteration is in order.

First I set up the function, I wanted it to take the number itself and then the number of adjacent digits as parameters like so: `largestProduct(num, digits)`. This way you can find the solution for 4 adjacent digits, 13 adjacent digits, 23, 12. Whatever your heart desires. So in the beginning of the function I want to take the number and split it up into an array `splitNum` so that I can iterate through `splitNum[0]` through `splitNum[digits - 1]`, multiply the numbers in that range, save that number to another array `arr`, repeat that process until I get to `splitNum[- digits]`. Once I have an array `arr` full of every possible combination of `digits` adjacent numbers, I pull out the `Math` object real quick to find the largest value in the array and return it.

It seems simple enough, but I did run into some problems in the beginning when I was splitting up the `num` parameter into an array. I started by turning the number into a string, splitting it, turning the values back into numbers, then creating an array from those numbers. This worked for small values, but once the number got so large that exponential notation was needed, my `splitNum` array would get the values `.`, `x`, and `e`, literally passed to them which would give me a bunch of `NaN` values. This ended up being a cool learning point because I had no idea that's how large values like that are passed in Node. So what I ended up doing was passing `num` into the function as a string to start and then creating an array of integers from the string like so:

```
var splitNum = Array.from(String(num), Number)
```

This is what my final function ended up looking like:

```
function largestProduct(num, digits) {
    var num;
    var splitNum = Array.from(String(num), Number)
    var arr = [];

    for (var i = 0; i <= splitNum.length - digits; i++ ) {
      var numSum = splitNum[i]
      for (var j = 1; j <= digits - 1; j++) {
        numSum *= splitNum[i + j];
      }
      arr.push(numSum)
    }

    var maxNum = (Math.max(...arr))
    return maxNum
}

```
