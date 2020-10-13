## Problem 03: Largest prime factor
From projecteuler.net:
>The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?

Going through Project Euler has been a fun trip down memory lane so far. The last math class I took was Intro to Calculus my sophmore year in college and I have been getting a real refresher on mathematics terms. What's a prime number again? What's a factor again? Oh so a prime factor is a number that another number is divisible by, yet itself isn't divisible by any other numbers. And now I have to find the largest prime factor for the number 600851475143? Alright cool.

This problem was a little simpler than the fibonacci sequence, in that I only ended up with one function which made testing a lot easier. But writing the program itself was much harder, I had to do a bit of research to find the best practices for finding prime numbers mathematically. One concept that helped me fiigure out this problem was the concept of trial division, which is where you take a number `n` that you want to find out the primality of. Then divide `n` by every number from 2 up to its square root, if `n` is not divisible by any of these numbers then the number is prime. When I learned about this I thought that this could very easily be implemented using iteration so I used this concept as my jumping of point for solving the problem.

Once again the example in the question is used as the test case. My Jest module looks like this:
```
test('largest prime factor of 13195 is 29', () => {
    expect(largestPrimeFactor(13195)).toBe(29);
})
```
Psuedocode was my best friend again as this problem contained multiple smaller steps. The function `largestPrimeFactor` takes a paramter `num` for which we find all of the factors between 2 and its square root using trial division implemented via a for loop:
```
function largestPrimeFactor(num) {
    var arr = [];
    var isPrime;
    for (var i = 2, sq = Math.sqrt(num); i <= sq ; i++) {
        if (num % i === 0)
```
Then determine which of those factors is prime using trial division via a for loop once again, assigning it a value of isPrime = true if it is prime:
```
            for(var j = 2; j <= i/2; j++) {
                if ( i % j == 0) {
                    isPrime = false;
                } else {
                    isPrime = true;
                }
            }
```
If isPrime = true then the number gets pushed to the array variable:
```
            if(isPrime = true) {
                num /= i;
                arr.push(i)
            }
        }
    }
```
Set a variable `solution` that is equal to the largest number in the array of prime factors and return `solution`:
```
    var solution = Math.max(...arr);
    return solution;
};
```
Running the Jest test returns a value of 29 which results in a pass, so now for the big event. Next step is running `largestPrimeFactor(600851475143)` returns a value of `6857`, upon submitting this value to projecteuler.net it turns out that this is the correct solution.