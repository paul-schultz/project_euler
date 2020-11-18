## Problem 23: Non-abundant Sums
From projecteuler.net:
>A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

First thing's first, lets start small and build a simple function that can pump out some abundant numbers. Re-using the lines of code to find factors of a number from previous problems proved to be helpful here. Then I created 2 arrays, one that would hold every integer up to `n` called `aArr`, and one array `bArr` to keep track of the sum of the corresponding `aArr` value's proper divisors. Then both arrays get iterated through, and if `bArr[i] > aArr[i]` then `aArr[i]` is abundant and it gets pushed to an array that will store all of the abundant values up to input `n` which I have named `bundy` for brevity reasons. he first part of my function looks like this: 
```
var aArr = [], bArr = [];
    for (var i = 1; i <= n; i++) {
        var d = [];
        var a = i;
        var b = 0;
        for (var k = 1; k <= a/2; k++) {
            if (a % k == 0) {
            d.push(k)
            }
        }
        for (var j = 0; j <= d.length - 1; j++) {
            b += d[j]
        }
        aArr.push(a)
        bArr.push(b)
    }

    var bundy = []

    for (var i = 1; i <= aArr.length; i++) {
        if (bArr[i] > aArr[i]) {
            bundy.push(aArr[i])
        }
    }
```

Next up is finding all of the possible sums that can be made from the array of abundant values. This was pretty simple: 
```
var bundySums = []
    for (var i = 0; i <= bundy.length - 1; i++) {
        for (var j = 0 ; j <= bundy.length - 1; j++) {
            var sum = bundy[i]+bundy[j];
            if (    sum <= n
                && !bundySums.includes(sum)) {
                bundySums.push(sum)
            }
        }
    }
```

Then to find all of the values that cannot be created with abundant numbers I iterated through `bundySums` and picked out all of the missing values like so: 
```
var nonBundys = []
    for (var i = 0; i <= n; i++) {
        if (!bundySums.includes(i)) {
            nonBundys.push(i)
        }
    }
```

This is where things got a little hairy for me, there is a subtle and in my opinion poorly worded hint in the problem where they suggest that 28123 is not the highest value that cannot be the sum of two abundant numbers. So this means that the number you are going to be finding the sum of non-abundant numbers up to is not actually 28123 but some integer below that. But keep in mind that at this point I'm building an array of every number from 1 to 28123, finding the sum of factors for each number, determining abundancy, finding every possible sum from every possible 2 number combination of abundant numbers, and then picking out the missing values. Things are getting very slow at this point, and in an effort to save time I decided to create my `bundy` array by only checking even numbers, which I thought would save time because all of the abundant numbers were even. But that was totally wrong you start getting odd abundant numbers in the 900's. So that combined with the vague hint sent me down a rabbit hole of incorrect potential solutions because the data I was working with was incorrect. 

So once I got back on the righteous path with the correct abundant values things became a lot easier. Returning the `nonBundy` array with `28123` as an input returned all of the values up to 28123 that cannot be created with two abundant numbers. The last value in the (very very long )array is 20161. Bingo. So I plug that value back into the function, but this time with one last iteration at the end that goes through the array of deficient values and tallies up their total sum, which returns `4179871`, the correct answer. My finished function looks like this:

```
function abundant(n) {
    var aArr = [], bArr = [];
    for (var i = 1; i <= n; i++) {
        var d = [];
        var a = i;
        var b = 0;
        for (var k = 1; k <= a/2; k++) {
            if (a % k == 0) {
            d.push(k)
            }
        }
        for (var j = 0; j <= d.length - 1; j++) {
            b += d[j]
        }
        aArr.push(a)
        bArr.push(b)
    }

    var bundy = []

    for (var i = 1; i <= aArr.length; i++) {
        if (bArr[i] > aArr[i]) {
            bundy.push(aArr[i])
        }
    }

    var bundySums = []
    for (var i = 0; i <= bundy.length - 1; i++) {
        for (var j = 0 ; j <= bundy.length - 1; j++) {
            var sum = bundy[i]+bundy[j];
            if (    sum <= n
                && !bundySums.includes(sum)) {
                bundySums.push(sum)
            }
        }
    }

    var nonBundys = []
    for (var i = 0; i <= n; i++) {
        if (!bundySums.includes(i)) {
            nonBundys.push(i)
        }
    }

    var nonBundySum = 0
    for (var i = 0; i <= nonBundys.length - 1; i++) {
        nonBundySum += nonBundys[i]
    }

    return nonBundySum
} 
```