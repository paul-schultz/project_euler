function factorial(n) {
    var product = BigInt(n);
    for (var i = n - 1; i >= 1; i-- ) {
        product *= BigInt(i);
    }

    var arr = product.toString().split('');
    var sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += parseInt(arr[i])
    }
    
    return sum
}
 
module.exports = factorial    