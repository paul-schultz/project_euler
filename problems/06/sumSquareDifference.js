function sumSquareDifference(n) {
    var sumSq = 0; 
    for (var i = 1 ; i <= n ; i++) {
        sumSq += ( i ** 2)
    }
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
        sum += i
    }
    var sqSum = sum ** 2
    return sqSum - sumSq;
}
 
module.exports = sumSquareDifference    