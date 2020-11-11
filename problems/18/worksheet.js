var tri = [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
]

// var tri = [
//     [75],
//     [95, 64],
//     [17, 47, 82],
//     [18, 35, 87, 10],
//     [20, 04, 82, 47, 65],
//     [19, 01, 23, 75, 03, 34],
//     [88, 02, 77, 73, 07, 63, 67],
//     [99, 65, 04, 28, 06, 16, 70, 92],
//     [41, 41, 26, 56, 83, 40, 80, 70, 33],
//     [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//     [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//     [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//     [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//     [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
// ]

function maxPath() {
    
    // iterate through each row of the pyramid
    for (var i = tri.length - 1; i >= 1; i--) {
        console.log(tri[i])
        var sum = []
        // in each row of the pyramid, find all sums
        for (var j = tri[i].length - 1; j >= 0; j--) {
            if (j == tri[i].length - 1) {
                // console.log(tri[i][j] + tri[i-1][j-1])
                sum.unshift(tri[i][j] + tri[i-1][j-1])
            } else if (j == 0) {
                // console.log(tri[i][j] + tri[i-1][j])
                sum.unshift(tri[i][j] + tri[i-1][j])
            } else {
                // console.log(tri[i][j] + tri[i-1][j-1], tri[i][j] + tri[i-1][j])
                sum.unshift(tri[i][j] + tri[i-1][j-1], tri[i][j] + tri[i-1][j])
            }
        }
        console.log(sum)
        var max = [];
        // Return the max value for each pair of possible sums
        for (var k = 0; k <= sum.length-1; k+=2) {
            var maxSum = Math.max(sum[k], sum[k+1])
            max.push(maxSum)
        }
        console.log(max)
        console.log(i)
        // replace next row of array with the max sum values
        tri[i-1] = max
    }

    console.log(`solution is ${tri[0]}`)
}

maxPath() //function works answer is 1074

// function test() {
//     var tri = [
//         [1, 2, 3],
//         [4, 5, 6]
//     ]
//     var foo = [7, 8, 9]
//     tri[1] = foo
//     console.log(tri)
// }

// test()