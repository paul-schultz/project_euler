## Problem 05: Smallest Multiple
From projecteuler.net:
>2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

At first glance I thought that this was the easiest problem so far. All I had to do was create a for loop that would start at one and increase by one until it found a number that was divisible by 1 through 20. Literally took me less than 5 minutes to find the correct solution, a new record. But while m function did find me the correct solution to the problem, the code went for 27 lines:
```
function smallestMultiple() {
    for (var i = 0; ; i++) {
      if (
           i % 1 == 0
        // same logic for numbers 2 through 18 
        && i % 20 == 0
      )
      return i;
    }
  }
```
This is one theme I have noticed about the Project Euler problems: you have a choice to either come up with a brute force solution that will get you the correct number and have you onto the next problem, or you can spend a little more time and have an elegant, shorter solution that has more functionality than just finding you one solution. So what I wanted to do here was take this code and refactor it so that it would not only be able to find the number that is divisible by 1 through 20, but the number that is divisible by 1 through 10, 1 through 500, 1 through 24847. I wanted to find a truer solution.

The second time around, in addition to adding a parameter `num` to the function I thought of how I could automate certain tasks from my original code. What I ended up doing was creating a variable `multiples` that was set to 0. I kept the original for loop that starts at one and increments `i` by one, but this time I added another for loop inside of it with a variable `j` that would go from 1 to `num` checking if `i % j == 0`. If true, `multiples` gets 1 added ro it and if false, `multiples` gets set back to zero and the original for loop continues its search for the lowest number divisible by 1 through input `num`. At the end of the function there is a final if statement that checks if the number of multiples of `i` is equal to the input `num` and returns `i` when that expression is true. Ending the function. The final refactored function looks like this: 
```
function smallestMultiple(num) {
    var multiples = 0
    for (var i = 1; ; i++) {
      for (var j = 1; j <= num; j++) {
        if ( i % j == 0) {
          multiples += 1 ;
          } else {
            j++;
            multiples = 0;
          }
      } if (multiples == num) {
        return i;
      }
    } 
  }
```
From over 25 to just 12 lines of code. While the function has improved in aesthetics, it did take much longer to execute, like 20 seconds longer to complete both test cases. But this function has lost in performance it has gained in utility, because now it can find the lowest multiple of any range of numbers, not just for 20. So that is a decent tradeoff in my opinion. Plus taking the original function and thinking about how I can simplify it was a fun mental exercise. My final passing test cases look like this: 
```
test('The smallest multiple of 1 through 10 is 2520', () => { 
    expect(smallestMultiple(10)).toBe(2520); 
});     

test('The smallest multiple of 1 through 20 is 232792560', () => { 
    expect(smallestMultiple(20)).toBe(232792560); 
});     
```
So what I learned from problem 05 is that the easiest way isn't always the right way, and there are always steps you can take to improve the functionality and performance of you programs.