## Problem 20: Factorial Digit Sum
From projecteuler.net:
>n! means n × (n − 1) × ... × 3 × 2 × 1. For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27. Find the sum of the digits in the number 100!

This one was pretty easy. I ran into some trouble with how to use `BigInt` which I will explain after I run through the code. 

First I want to take a number `n` as the input for my function and return its factorial. A factorial, as we learned in one of the previous problems, and is explained in the problem summary, is the number you get when you take an input and then multiply it by every whole integer from itself to one. A `for` loop can accomplish this with ease:
```
var product = BigInt(n);
    for (var i = n - 1; i >= 1; i-- ) {
        product *= BigInt(i);
    }
```

After I have the factorial I want to add together every digit. This is also easily accomplished with a `for` loop and the `toString()`, `split()` and `parseInt()` methods. Here is another instance of manipulating data types which has become a common theme in Project Euler. Take the sum, turn it into a string, then split it to get an array of all of the digits. Then iterate through the array, making sure to turn each array value back into a number before you add it to the `sum` variable.
```
var arr = product.toString().split('');
    var sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += parseInt(arr[i])
    }
```

Return the sum at the end and you have a working function. The only road block I ran into was when implementing `BigInt`. Initially I had it so that `BigInt` was only applied to `product` before it got split into an array. This meant that the resulting value that came from converting from scientific notation to an integer was incorrect. I have yet to find out the reason. However when I defined `product` as a `BigInt` and `i` as a `BigInt` when I was multiplying them together in the first round of iteration, that gave me the correct answer. I suppose it makes sense that starting off with the `BigInt` data type at the beginning rather than converting to `BigInt` at the end yields the correct answer, but I am still unsure about the reason. Perhaps I will come back and edit this file after further research.