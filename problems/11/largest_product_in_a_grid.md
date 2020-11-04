## Problem 11: Largest Product in a Grid
From projecteuler.net:
>In the 20×20 grid below, four numbers along a diagonal line have been marked in red.The product of these numbers is 26 × 63 × 78 × 14 = 1788696. What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

If there was an elegant way to solve this problem, I did not find it. What I did was create an array of arrays with the rows of the grid. Then I iterated through the array of arrays in four different ways. That was a nice rhyme there. One way created an array `horizontal` that contains all possible products of 4 adjacent horizontal numbers. The second way created an array `vertical` that contains all possible products of 4 adjacent vertical numbers. The third way created an array `leftRightDiagonal` that contains all possible products of 4 adjacent diagonal numbers going from left to right. The fourth and final way created an array `rightLeftDiagonal` that contains all possible products of 4 adjacent diagonal numbers going from right to left. 
After I had four arrays of all the possible products contained in the grid, I created a new array `largest` that contained all of the maximum values from each array. 
Returning the maximum value from the array `largest` of maximum values gives `70600674` which is the correct answer. This number came from the `rightLeftDiagonal` array.
In this problem the big issue for me wasn't getting the skeleton of the program laid out, but getting the small differences between each of the four iterations correct. I knew that each array was going to be created by a nested for loop, but getting the loops to behave in the correct manner; left to right, top to bottom, left to right diagonally, right to left diagonally, was where the challenge was. I will include each for loop here for reference:
Horizontal loop: 
```
for (var i = 0; i <= 19; i++) {
    for (var j = 0; j <= 16; j++) {
        horizontal.push(grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3])
    }
}
```
Vertical loop: 
```
for (var i = 0; i <= 19; i++) {
    for (var j = 0; j <= 16; j++) {
        vertical.push(grid[j][i] * grid[j+1][i] * grid[j+2][i] * grid[j+3][i])
    }
}
```
Left to right, top to bottom diagonal loop: 
```
for (var i = 0; i <= 16; i++) {
    for (var j = 0; j <= 16; j++) {
        leftRightDiagonal.push(grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2] * grid[i+3][j+3])
    }
}
```
Right to left, top to bottom diagonal loop: 
```
for (var i = 0; i <= 16; i++) {
    for (var j = 19; 3 <= j; j--) {
        rightLeftDiagonal.push(grid[i][j] * grid[i+1][j-1] * grid[i+2][j-2] * grid[i+3][j-3])
    }
}
```
As you can see all four of these loops are identical in structure, but the differences between them are very subtle. This made for a pretty good mental workout and a fun problem to solve.