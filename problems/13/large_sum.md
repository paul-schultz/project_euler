## Problem 13: Large Sum
From projecteuler.net:
>Work out the first ten digits of the sum of the following one-hundred 50-digit numbers. (Numbers can be viewed in worksheet.js or in largeSum.js)

The Large Sum problem is very straightforward but there is a good bit of data type manipulation involved. It did not take me long to solve though so the length of this write-up will reflect that. 

To start off there is an absolutely massive number that is a sum of one-hundred 50 digit numbers. With the sage-like wisdom I have gained from the previous problems, I know that if I find this sum and output its first ten digits that I am going to get a number formatted in scientific notation, complete with a period and an x. So that will not work. A little bit of research led me to JavaScript's `BigInt` object. `BigInt` gives you a way to represent whole numbers larger than 2<sup>53</sup> - 1. You can use `BigInt` by appending the letter `n` onto your large number. Simple enough. 

So with that newfound knowledge I created a constant `sum` that adds together the one-hundred 50 digit numbers with the help of the `BigInt` object. After that I used three different methods to manipulate `sum` into a format that would give me the correct, test-friendly solution. This was done by turning `sum` into a string and then extracting the first ten characters like so:
```
sum.toString().substring(0,10)
```
And then parsing this string argument to return an integer.
```
parseInt(sum.toString().substring(0,10))
```
Doing this output `55373762301` which was the correct answer.