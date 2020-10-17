## Problem 10: Summation of Primes

From projecteuler.net:

> The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.

So I skipped ahead one because this Problem looked a little easier than Problem 09. And it had to do with prime numbers again so I figured I could reuse by sieve program to save some time. So won't spend much time on this writeup. For this problem I took my sieve algorithm and instead of that fixed value of 1 million that I put in there arbitrarily to help me find the 10001st prime, I used a parameter num that is to be input when the function is called. This way you can just call `primeSum(13)` or `primeSum(2395834943)` and get the sum of prime number less than that. In addition to the new variable, instead of returning a specific value from the array of prime values that corresponded to an n value, I used the `reduce()` method to find the sum of the array of prime. Bada-bing. Here is my finished function:

```
function primeSum(num) {
    var arr = [], primes = [];
    for (var i = 0; i < num; i++) {
        arr.push(true);
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if(arr[i]) {
            for (var j = i * i; j < num; j += i) {
                arr[j] = false;
            }
        }
    }
    for (var i = 2; i < num; i++) {
        if(arr[i]) {
            primes.push(i);
        }
    }
    var sum = (primes.reduce((a, b) => a + b, 0));
    return sum;
}
```
