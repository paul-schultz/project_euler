// here n is number of digits in the number, and the index is returned
function thousand_fibonacci(n) {
    var arr = [] 
    for (var i = 1; i <= 10000 ; i++) {
        var fibLength = 0
        if (i == 1 || i == 2) {
            arr.push(1)
            fibLength = parseInt(arr[i-1].toString().length)
        } else {
            arr.push(BigInt(arr[i - 2]) + BigInt(arr[i - 3]))
            fibLength = parseInt(arr[i-1].toString().length)
        }
        if (fibLength == n) {
            return i;
        }
    }
} 
 
module.exports = thousand_fibonacci    