## Problem 15: Lattice Paths
From projecteuler.net:
>Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner. How many such routes are there through a 20×20 grid?

I started this problem out by drawing a 2x2 grid and labeling the number of steps it took to get to each point, the three points going diagonally left to right were all marked as 2. 2 x 3 = 6, so that could be a pattern for all grids with even dimensions right? No, that was wrong, very wrong. I also realized that for a 20 x 20 grid I would be dealing with a very large number, so drawing out the problem was not going to help me at all. So I set out to figure out how the number of lattice paths are calculated which math, which I would then turn into a functioning computer program. 

My first lead came when I found out that for a grid with the dimensions of `a` by `b`, the number of possible lattice paths is equal to the following binomial coefficient:

![equation](https://latex.codecogs.com/gif.latex?\binom{a&space;&plus;&space;b}{a}) 
 
But what does that even mean? I don't know about you but its been 6 years since I've taken a math class. So upon further research I found out the following: that "the binomial coefficient is the number of ways of picking unordered outcomes from possibilities, also known as a combination or combinatorial number." That sounds right up my alley since I am trying to find every possible lattice path outcome from the set of possibilities. 

The formal equation for a binomial coefficient looks like this:

![equation](https://latex.codecogs.com/gif.latex?\binom{n}{k}=\frac{n!}{k!&space;\cdot&space;(n&space;-&space;k)!}) 

Where ![equation](https://latex.codecogs.com/gif.latex?!) is the factorial operation, so if ![equation](https://latex.codecogs.com/gif.latex?n&space;=&space;3), then ![equation](https://latex.codecogs.com/gif.latex?n!&space;=&space;3&space;\cdot&space;2&space;\cdot&space;1). Wait, that kind of looks like a `for` loop. 

Now all of the heavy lifting is done, and I need to convert these mathematical functions into a programmatical one. I started by defining a function `latticePaths(a, b)`, where `a` and `b` are the x and y dimensions of the grid. My thought process in writing this function was to turn the grid dimensions input  into the ![equation](https://latex.codecogs.com/gif.latex?\binom{a&space;&plus;&space;b}{a}) format, which then got turned into the ![equation](https://latex.codecogs.com/gif.latex?\binom{n}{k}=\frac{n!}{k!&space;\cdot&space;(n&space;-&space;k)!}) format, which would give me my answer. I did this by first creating three variables `n`, `k`, and `z`; where `n = a + b`, `k = a`, and `z = n - k` with `z` meant to represent the value inside parentheses in the denominator of the binomial coefficient equation. 

After that I defined three more variables `nF`, `kF`, and `zF` which were going to become the factorials of the `n`, `k`, and `z` values. This was accomplished by multiplying them by every integer from their initial value down to 1 using `for` loops. 

Once I had the factorials of `n`, `k`, and `z`, getting the number of paths was as easy as dividing the factorial of `n` by the product of the factorial of `k` and the factorial of `z`.

My finished function looks like this: 
```
function latticePaths(a,b) {
    var n = a + b,
        k = a,
        z = n - k;
    
    var nF = n,
        kF = k,
        zF = z;
    
    for (var i = n-1; i >= 1; i--) {
        nF *= i;
    }
    for (var i = k-1; i >= 1; i--) {
        kF *= i;
    }
    for (var i = z-1; i >= 1; i--) {
        zF *= i;
    }

    var paths = Math.floor(nF / (kF * zF));
    return paths 
}
```
