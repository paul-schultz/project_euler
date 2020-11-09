## Problem 17: Number Letter Counts
From projecteuler.net:
>If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total. If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

All of the problems up to this point have been pure math problems. I felt that Number Letter Counts was more of a programming specific problem because you were programming elements of the human language rather than just numbers. It just felt more like a real world application. 

Same as every other problem I started out small and got progressively more complicated. So first I wrote some code that would take a number from 1 to 10 and return the length of the array of its English language counterparts up to that number. I need a an array `const ones` that is going to hold the corresponding strings for the numbers. Then I felt that inside the function, the easiest way to count the total number of letters would be to create a variable `numbers` that is just blank string. Then use a for loop to pass the word from `ones` into `numbers`. After the loop is finished, `numbers` is split into an array and then its length is calculated. 

So 1 through 10 could be referred to as my first "case" that I had to handle. To iterate from 1 through 1000 I came up with 5 different cases that I would have to handle differently:
1. 1 through 9 (Single digit integers)
2. 10 through 19 (A mix of words like ten and twelve and then all of the "teens")
3. 20 through 99 (Numbers containing a word for the tenth place plus one of the single digit integers)
4. 100 through 999 (One of the single digit integers plus the string "hundred and" plus a number ranging from 1 to 99)
5. 1000 (return the string "one thousand")

My second case was very similar to #1. Once the `i` value in the for loop reached 9, instead of pushing values onto `numbers` from the array `ones` it pushed it from the array `teens` which contained strings for the numbers 10 through 19. 

The third case is where things start to get a bit hairier. Every number from 20 to 99 consists of a word that represents the tenths place (twenty, thirty, forty) plus a word that represents the ones place. So I created two more arrays `tenthPlace` and `onePlace` respectively. So now instead of plugging the `i` value into the array index, I split the `i` value into an array `int`. `int[0]` is going to be the tenth place and `int[1]` is going to be the ones place. So for example, to get the correct word for 31 I split `i=31` into an array like this; `var int = i.toString().split('')`, then append `(tenthPlace[parseInt(int[0])-2])` and `(onePlace[parseInt(int[1])])` onto `numbers`. Simple enough right?

The fourth case is pretty similar to case #3. `i` gets split into an array `int`, and the `ones` array is reused to get the correct number for the hundreds place. Then `"hundred"` is appended if `int[1] == 0 && int[2] == 0` i.e. the number is 300 or 200. Otherwise we append `"hundred and"` plus the tenth and ones place. So for this part instead of handling three different cases for 1 - 99 within another case, what I did was create a new blank array `to99` at the beginning of the function, and append every number from the first three cases onto it. And just like that, after the third case is done getting iterated through, I have an array of the numbers 1 through 99 that I can reuse over and over in the fourth case. The finished code for the fourth case looks like this:
```
if (100 <= i && i <= 999) {
    var int = i.toString().split('')
    var hundredPlace = ones[parseInt(int[0] - 1)]
    var otherNum = parseInt(int[1] + int[2])
    if (int[1] == 0 && int[2] == 0) {
        numbers += hundredPlace + " hundred"
        } else {
        var threeDigit = hundredPlace + " hundred and " + to99[otherNum - 1]
        numbers += threeDigit
    }
}
```

The fifth case is very simple. Since I am only going up to one thousand, I write some logic to return the string `"one thousand"` for `(1000 <= i)`. If I wanted to keep going I would probably just do some kind of variation of case #4. I would create another array `to999` that would hold the values 1 - 999 from the previous cases and then append the `n thousand` onto the front of it.

The end of my program is the same as it was after I completed the first case. `numbers` gets split into an array and then its length gets counted.

The biggest challenges for me in this problem was the interplay between converting data types and then getting the 0-based indexing of the arrays to match up with the 1-based indexing of the number 1 - 1000. One example of this is in the third case where to append the tenth place onto `numbers`, I get a number value for the tenth place of the `i` value with `int[0]`, the I subtract `2` from that so it will match up with the corresponding word in the `tenthPlace` array. But first I have to use `parseInt` to convert it back from a string into an integer. So the final code for that single line looks like this: 
```
numbers += (tenthPlace[parseInt(int[0])-2])
``` 
That is a lot of nesting to get one single value!