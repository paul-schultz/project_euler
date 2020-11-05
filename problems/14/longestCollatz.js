function longestCollatz(n) {
    var collatzArr = [];
    for (var i = 1; i <= n; i++) {
        var arr = [];
        if (i == 1) {
            arr.push(i);
            collatzArr.push(arr)
        } else if (i == 2) {
            arr.push(i)
            arr.push(1)
            collatzArr.push(arr)
        } else {
            arr.push(i)
            var j = i;
            while (j > 1) {
                if (j % 2 == 0) {
                    j /= 2
                    arr.push(j)
                } else {
                    j *= 3 
                    j += 1
                    arr.push(j)
                } 
            }
            collatzArr.push(arr);
        }
    }

    var latzLength = [];
    for (var i = 0; i <= n-1; i++) {
        latzLength.push(collatzArr[i].length)
    }
    var longest = latzLength.reduce((max, v) => max >= v ? max : v, -Infinity);
    var longestIndex = latzLength.indexOf(longest)
    
    return collatzArr[longestIndex][0]
} 
 
module.exports = longestCollatz    