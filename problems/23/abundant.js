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

    for (var i = 1; i <= aArr.length; i++) {
        if (bArr[i] > aArr[i]) {
            bundy.push(aArr[i])
        }
    }

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

    var nonBundys = []
    for (var i = 0; i <= n; i++) {
        if (!bundySums.includes(i)) {
            nonBundys.push(i)
        }
    }

    var nonBundySum = 0
    for (var i = 0; i <= nonBundys.length - 1; i++) {
        nonBundySum += nonBundys[i]
    }

    return nonBundySum
} 
 
module.exports = abundant    