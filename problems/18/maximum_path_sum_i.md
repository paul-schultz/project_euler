## Problem 18: Maximum Path Sum I
From projecteuler.net:
>By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
   3
  7 4
 2 4 6
8 5 9 3
That is, 3 + 7 + 4 + 9 = 23.
Find the maximum total from top to bottom of the triangle below:
** 15 Row Triangle **
NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

This problem was a real doozy. I spent about an hour trying to figure out how to iterate through the triangle from top to bottom, finding every possible combination of sums, which came to no avail. This was probably for the best, because the difficulty in trying to find the brute force solution, brute forced me into finding a simpler, somewhat more elegant solution. 

Since the top to bottom approach was not working out for me I decided to try a bottom to top approach. By writing it out in my notebook, I discovered that by finding all of the possible sums between a row with the row above it would produce an array that is exactly twice the size of the upper row every time. And that if you take the array of sums, take every other maximum value and replace these values with the upper row values, then repeat this traversing up the pyramid, that you will find the correct maximum sum value. At least this worked with the small pyramid where the solution was 23. Let me explain in more detail:

I felt that easiest way to represent this pyramid in code was by turning it into an array of arrays, this gives me the ability to iterate through each axis of the pyramid with relative ease. So the pyramid from the example will look like this:
```
var tri = [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
]
```
Lets start with the first two rows: finding all of the combinations between `tri[2]` and `tri[3]` returns the following array:
```
[10, 7, 9, 13, 15, 9]
```
Finding every other max values in this array returns the following:
```
[10, 13, 15]
```
Then replacing `tri[2]` with the new array of max values, `tri` now looks like this:
```
[3],
[7, 4],
[10, 13, 15]
```
Then the pattern repeats again, all of the sum combinations of the new `tri[2]` and `tri[1]` produces the array  `[17, 20, 17, 19]` which becomes `[20, 19]` after taking out every other max value. `tri` looks like this now:
```
[3],
[20, 19]
```
From which it is easy to tell that the max value of all of the possible sum combinations is `23`, found by returning `tri[0]` after all of the iteration is complete. 

There was a bit of a challenge in converting all of this human logic into computer logic, but after I got my function to work properly the final code looks like this:
```
function maxPath() {
    for (var i = tri.length - 1; i >= 1; i--) {
        var sum = []        
        for (var j = tri[i].length - 1; j >= 0; j--) {
            if (j == tri[i].length - 1) {                
                sum.unshift(tri[i][j] + tri[i-1][j-1])
            } else if (j == 0) {                
                sum.unshift(tri[i][j] + tri[i-1][j])
            } else {
                sum.unshift(tri[i][j] + tri[i-1][j-1], tri[i][j] + tri[i-1][j])
            }
        }
        var max = [];
        for (var k = 0; k <= sum.length-1; k+=2) {
            var maxSum = Math.max(sum[k], sum[k+1])
            max.push(maxSum)
        }
        tri[i-1] = max
    }
    
    return tri[0][0]
}
```

And the good news was that not only did this code find the correct solution for the 15 row pyramid in the current problem. But I skipped ahead to Problem 67 where you have to iterate through a 100 row pyramid and it found the correct solution for that one as well.