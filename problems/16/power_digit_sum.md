## Problem 16: Power Digit Sum
From projecteuler.net:
>![equation](https://latex.codecogs.com/gif.latex?2^{15}=32768) and the sum of its digits is ![equation](https://latex.codecogs.com/gif.latex?3&space;&plus;&space;2&space;&plus;&space;7&space;&plus;&space;6&space;&plus;&space;8&space;=&space;26). What is the sum of the digits of the number ![equation](https://latex.codecogs.com/gif.latex?2^{1000}).

This writeup will be short and sweet to be just like the problem. I already know about `BigInt` from problem 14 so that saved me some time, since I knew 2 to the 1000th power would be a massive number. 

So defined a function that takes in a number and and exponent as input. Then create a variable that is equal to the resulting power of those two numbers. The power gets converted from an integer into a string, then each character is split into an array. The array of numbers are all converted back into integers so we have a the correct data type to perform addition on. Then a variable sum is defined at zero, and the array of integers is iterated through, adding each value onto the sum variable. The new sum variable is returned and we learn that the answer is `1366`. The finished function looks like this:
```
function powerDigitSum(num, e) {
    var power = BigInt(num ** e);
    var splitPower = power.toString().split('');
    var powerDigits = splitPower.map(Number);
    var sum = 0;
    for (var i = 0; i <= powerDigits.length - 1; i++) {
        sum += powerDigits[i];
    }
    return sum
} 
```