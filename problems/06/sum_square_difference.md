## Problem 06: Sum square difference
From projecteuler.net: 
> The sum of the squares of the first ten natural numbers is, 1&sup2; + 2&sup2; + ... + 10&sup2; = 385. The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)&sup2; = 55&sup2; = 3025. Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640. Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

Alright this one was super easy so not going to spend that much time reflecting on how I solved it. I will just run through the steps I took to find a solution and get my tests to pass.

First I needed a function that would find the sum of squares given an n-value: 
```
function sumOfSquares(n) {
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sum += ( i ** 2)
    }
    console.log(sum);
  }

```
Then I needed a function that would find the square of the sum given an n-value:
```
function squareOfSum(n) {
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sum += i
    }
    var sqSum = sum ** 2
    console.log(sqSum); 
  }
```
Then I needed a function putting it all together. I could have wrote a function that just called the earlier functions but I decided to write a new one instead, because that way I only have to export one function over to the test module. The final function I wrote looks like this: 
```
function sumSquareDifference(n) {
    var sumSq = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sumSq += ( i ** 2)
    }
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sum += i
    }
    var sqSum = sum ** 2
    console.log(sqSum - sumSq);
  }
```
And my test case using the numbers from the example problem looks like this: 
```
test('The sum square difference for the first ten natural numbers is 2640', () => { 
    expect(sumSquareDifference(10)).toBe(2640); 
});  
```
Which returns a pass so I run `sumSquareDifference(100)` which returns an output of 25164150. Which projecteuler.et confirmed to be the correct answer. My final test case looks like this: 
```
test('The sum square difference for the first 100 natural numbers is 25164150', () => { 
    expect(sumSquareDifference(100)).toBe(25164150); 
});
```
