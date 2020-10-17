##Problem 07: 10001st Prime
From projecteuler.net:

> By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10001st prime number?

This one was a doozy. It looked quite simple on the outset, I would just have to make some tweaks to my code from the largest prime factor problem, make it return the nth prime value and be on my way. One full day later I have put together a working solution. It was only when I stumbled upon the Sieve of Eratosthenes that I made any real progress. If you want to look at what I tried before the Sieve you could refer to the worksheet, but I am going to spend this write up talking about the Sieve because I think it is an interesting concept.

The sieve of Eratosthenes is logical framework for determining which numbers in a range are prime. For smaller ranges, this is done simply by removing all of the multiples of 2, 3, 5, and 7. For larger ranges, say a million, it gets a little hairy.

According to Wikipedia, the steps to perform a sieve go as such:

1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
2. Initially, let p equal 2, the smallest prime number.
3. Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
4. Find the smallest number in the list greater than p that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
5. When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.

In programmers terms, this means that you create a function with an input `n`, make an array of numbers going from 1 to `n`. Then create a loop that starts at 2 and increases by two, marking each multiple as false. Then the loop goes up to the next truthy number, in this case 3 and marks each multiple as false. After 3 the next truthy value will be 5 because 4 is a multiple of 2 and has already been marked. This process then repeats for 7 and whats left with a true value in your array will be all of the prime numbers in the range of 1 to `n`.

These steps seemed like a pretty good guide to get me on the right path after a few hours of fumbling around with different solutions. First I started out by defining an array `arr` that will contain all of the values to be tested for primality and an array `primes` that will contain the primal values that remain from `arrays`. Since I was looking for the nth prime value rather than all of the prime values between 1 and n, I created an array to test for primality that would contain all of the values in an arbitrary range, in this case I chose 1 million to be on the safe side. The beginning of my function looks like this:

```
function nthPrime(n) {
    var arr = [], primes = [];
    for (var i = 0; i < 1000000; i++) {
        arr.push(true);
    }
```

Next in my function, I created another for loop that would start at two, the first prime number, and iterate through each value, assigning every multiple of that number above its square a falsy value. The starting point is the square to account for any overlapped values in the lower ranges.

```
for (var i = 2; i <= Math.sqrt(1000000); i++) {
        if(arr[i]) {
            for (var j = i * i; j < 1000000; j += i) {
                arr[j] = false;
            }
        }
    }
```

Then another for loop iterates through `arr`, pushing every truthy value to `primes`. The output returned is formatted as `primes[n-1]` to return the corresponding nth prime value.

```
for (var i = 2; i < 1000000; i++) {
        if(arr[i]) {
            primes.push(i);
        }
    }
    return (primes[n-1]);
```

Once again using the example problem as the initial test case:

```
test('6th prime number is 13', () => {
    expect(nthPrime(6)).toBe(13);
});
```

Which passes, and `nthPrime(10001) + 104743`, which is the correct solution.
