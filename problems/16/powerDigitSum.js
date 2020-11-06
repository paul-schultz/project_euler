function powerDigitSum(num, e) {
    var power = BigInt(num ** e);
    var splitPower = power.toString().split('');
    var powerDigits = splitPower.map(Number);
    var sum = 0;
    for (var i = 0; i <= powerDigits.length - 1; i++) {
        sum += powerDigits[i];
    }
    return sum
} 
 
module.exports = powerDigitSum    