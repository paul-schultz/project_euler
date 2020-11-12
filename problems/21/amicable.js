function amicable(n) {

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

    var ami = []
    for (var i = 1; i <= aArr.length; i+=2) {
        for (var k = 1; k <= bArr.length; k+=2) {
            if (aArr[i] == bArr[k] 
             && aArr[k] == bArr[i]
             && i !== k) {
                ami.push(aArr[i], bArr[k])
            }
        }
    }

    var uniq = [...new Set(ami)];
    var sum = 0;
    for (var i = 0; i <= uniq.length - 1; i++) {
        sum += uniq[i]
    }

    return sum
} 

amicable(10000)
 
module.exports = amicable    