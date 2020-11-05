## Problem 14: Longest Collatz Sequence
From projecteuler.net:
>The following iterative sequence is defined for the set of positive integers:  
n → n/2 (n is even)  
n → 3n + 1 (n is odd)  
Using the rule above and starting with 13, we generate the following sequence:  
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1  
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.  
Which starting number, under one million, produces the longest chain?  
NOTE: Once the chain starts the terms are allowed to go above one million.

The process for solving this problem was very similar to that of previous problems, and possibly all programming problems. I started as small as possible and made incrementally more complex function until I got the output I desired. This problem was broken down into three steps.

1. Create a function that takes in a number and returns its respective Collatz sequence.
2. Rework the previous function, so instead of returning a single number's Collatz sequence, it takes an `n` value and returns the Collatz sequence for every integer up to the value `n`.
3. Create an array of the lengths of each Collatz sequence up to integer `n`, and return the starting value of the sequence with the largest length. Such that `longestCollatz(1000000)` will give you your solution.

For step 1 a while loop was the iterator of choice, a little bit of a change up from the usual for loop. So this function `collatz` takes a value `num` and while `num > 1`, if `num % 2 == 0` then `num` is divided by 2 and pushed to an array `arr`, and if `num` is odd then `num` is multiplied by 3 and increased by one, and `num` is pushed to `arr`. So just like in the example given in the problem, `collatz(13)` will return an array of 10 numbers; `[ 13, 40, 20, 10, 5, 16,  8,  4,  2, 1 ]`. The code for `collatz(num)` looks like this:
```
function collatz(num) {
    var arr = [];
    arr.push(num)
    while (num > 1) {
        if (num % 2 == 0) {
            num /= 2
            arr.push(num)
        } else {
            num *= 3 
            num += 1
            arr.push(num)
        } 
    }
    console.log(arr)
}
```

Step 2 involves taking `collatz(num)` and placing it inside of a for loop, so that instead of outputting a Collatz sequence for one single number, you will get every an array of every Collatz sequence from `1` to `n` which is defined as `collatzArr` in the program. The code looks like this:
```
function collatzUpTo(n) {
    var collatzArr = [];
    for (var i = 1; i <= n; i++) {
        var arr = [];
        if (i == 1) {
            arr.push(i);
            collatzArr.push(arr)
            // console.log(collatzArr)
        } else if (i == 2) {
            arr.push(i)
            arr.push(1)
            collatzArr.push(arr)
            // console.log(collatzArr)
        } else {
            arr.push(i)
            var j = i;
            while (j > 1) {
                if (j % 2 == 0) {
                    j /= 2
                    arr.push(j)
                } else {
                    j *= 3 
                    j += 1
                    arr.push(j)
                } 
            }
            collatzArr.push(arr); 
        }
    }
    console.log(collatzArr)
}
```

For the third and final step, I just added in a few lines of code at the end that creates a new array `latzLength` that will contain the length of every Collatz sequence from `1` to `n`, and then return the starting number of the sequence with the longest length. I ran into an issue here because apparently `Math.max(..arr)` has a little trouble working when you have an array with an index that is approaching one million. So a little ES6 magic took care of that. The code looks like this:
```
var latzLength = [];
    for (var i = 0; i <= n-1; i++) {
        latzLength.push(collatzArr[i].length)
    }
    var longest = latzLength.reduce((max, v) => max >= v ? max : v, -Infinity);
    var longestIndex = latzLength.indexOf(longest)
    
    return collatzArr[longestIndex][0]
```
And the value that lives inside `collatzArr[longestIndex][0]` is `837799` whose Collatz sequence is `525` numbers long. Wow!!