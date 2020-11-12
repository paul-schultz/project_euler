## Problem 21: Amicable Numbers
From projecteuler.net:
>Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
Evaluate the sum of all the amicable numbers under 10000.

In this problem we get another guest appearance from that line of code that finds factors of a number that I know how to write so well by now. This function boils down to three parts: one part to find the sum of proper divisors for every integer up to the input `n`, one part to iterate through that array and pick out the values that are amicable, and then one last part to find the sum of all amicable values up to `n`. 

My function `amicable(n)` starts by defining two arrays `aArr` and `bArr`, `aArr` will hold integers from 1 to `n` and `bArr` will hold the sum of proper divisors from 1 to `n`. These two arrays will work togethers because their indexes will align with each other. The first part of the function looks like this:
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
        // console.log(d)
        bArr.push(b)
        // console.log(" ")
    }
```

In the second part of my function I sift through all of the odd numbered indexes of `aArr` and `bArr` with a nested loop, because the odd numbered indexes will correspond with even numbered values. Then if `aArr[i] == bArr[k] && aArr[k] == bArr[i]` it means that `i` and `k` are amicable because the sum of factors in `bArr` is equal to the integer in `aArr` and vice versa. This logic returns the following array for `n=10000`:
```
[
     6,   28,  220,  284,
   496, 1184, 1210, 2620,
  2924, 5020, 5564, 6232,
  6368, 8128
]
```

After I plug this array into the third part of my function which calculates a sum value of `40284` (very simple so does not warrant an explanation), I learned that this was not the correct answer. But why was this? A closer look at the array shows that there are a few integers sprinkled in there that do not have an amicable counterpart. Those numbers are `6`, `28`, `496`, and `8128`. These are what are known as perfect numbers, numbers whose sum of factors equal itself. Rogues in the data. Since the problem has to do with amicable pairs and not perfect numbers I added in a third condition such that `i !== k` if it wants to join the array of amicable numbers. Doing this removes the perfect numbers from the array and returns the following:
```
[
   220,  284, 1184,
  1210, 2620, 2924,
  5020, 5564, 6232,
  6368
]
```
This returns a sum of `31626` which is the correct solution. My finished function looks like this:
```
function amicable(n) {
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

    var ami = []
    for (var i = 1; i <= aArr.length; i+=2) {
        for (var k = 1; k <= bArr.length; k+=2) {
            if (aArr[i] == bArr[k] 
             && aArr[k] == bArr[i]
             && i !== k) {
                ami.push(aArr[i])
            }
        }
    }

    var sum = 0;
    for (var i = 0; i <= ami.length - 1; i++) {
        sum += ami[i]
    }

    return sum
} 
```