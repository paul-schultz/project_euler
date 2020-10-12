## Algorithm 01: Multiples of 3 and 5
From projecteuler.net: 
> "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000."

At first glance this problem seems like the classic FizzBuzz Test with a twist. Instead of printing out a list of numbers and returning Fizz for every multiple of 3, Buzz for every multiple of 5, and FizzBuzz for every multiple of 3 and 5, you create a running total that adds up all of the multiples of 3 and 5 below a given number.
So I started off by writing the test for my function with Jest. As the problem summary states; the multiples of 3 and 5 below ten are 3, 5, 6, and 9. The sum of these numbers is 23. That seems like a great starting point for writing my test in Jest, the finished test looks like this:
```
test('sum of multiples of 3 and 5 below 10 is 23', () => {
    expect(threeAndFive(10)).toBe(23);
});
```
Now for my function, I started off by defining a function `threeAndFive` that takes in a parameter `num`. Inside of the function I define a variable `sum` that is equal to 0. This variable will keep track of our running total of 3 and 5 multiples. After that I created a for loop that starts at 0 and goes up to less than num in increments of 1. For every number that is iterated from `0 < num`, if the number is divisible by 3 or 5 then the number gets added to `sum`. After the for loop is completed the new value for sum is returned which is the output for our algorithm. My finished function looks like this:
```
function threeAndFive(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if (i % 3 === 0) {
            sum += i;
        } else if (i % 5 === 0) {
            sum += i;
        }
    }
    return sum
}
```
My test for `expect(threeAndFive(10)).toBe(23);` is a pass. So I plug in 1000 for `num` and the function returns a value of 233168 and according to projecteuler.net that is the correct solution. 

