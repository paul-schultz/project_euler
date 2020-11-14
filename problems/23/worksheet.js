function abundant(n) {

    var aArr = [], bArr = [];
    for (var i = 1; i <= n; i++) {
        var d = [];
        var a = i;
        var b = 0;
        for (var k = 1; k <= a/2; k++) {
            if (a % k == 0) {
            d.push(k)
            }
        }
        for (var j = 0; j <= d.length - 1; j++) {
            b += d[j]
        }
        aArr.push(a)
        bArr.push(b)
    }

    var bundy = []
    // Incremented i by 2 here to save time and that sent me on a very long rabbit hole
    // of wrong answers, made incorrect assumption that values could not be abundant and odd
    for (var i = 1; i <= aArr.length; i++) {
        if (bArr[i] > aArr[i]) {
            bundy.push(aArr[i])
        }
    }

    // console.log(aArr)
    // console.log(bArr)
    // console.log(bundy)

    // If all integers greater than 28123 can be written as the sum of two bundys
    // Then if you find all of the bundys less than 28123, and find every possible sum
    // that can be created with those numbers and put them into an array, then after removing the duplicates
    // The sum of every number less than 28124 that is not equal to a value in that array
    // will yield the correct solution

    // Find all possible sums of the bundys
    var bundySums = []
    for (var i = 0; i <= bundy.length - 1; i++) {
        for (var j = 0 ; j <= bundy.length - 1; j++) {
            var sum = bundy[i]+bundy[j];
            if (    sum <= n
                && !bundySums.includes(sum)) {
                bundySums.push(sum)
            }
        }
    }

    // console.log(bundy)
    // console.log(bundySums.sort((a, b) => a - b))

    // Find all non bundys
    var nonBundys = []
    for (var i = 0; i <= n; i++) {
        if (!bundySums.includes(i)) {
            nonBundys.push(i)
        }
    }

    // console.log(nonBundys)
    // console.dir(bundy, {'maxArrayLength': null});
    // console.dir(bundySums.sort((a, b) => a - b), {'maxArrayLength': null});
    console.dir(nonBundys, {'maxArrayLength': null});
    
    // Find sum of nonBundys
    // var nonBundySum = 0
    // for (var i = 0; i <= nonBundys.length - 1; i++) {
    //     nonBundySum += nonBundys[i]
    // }

    // console.log(nonBundySum)
} 

abundant(28123) //return nonBundys array to find highest number that is not a sum of two bundys
//abundant(20161) //return nonBundy sum to get 4179871 **correct (take LONG time)