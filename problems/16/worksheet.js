// define function that takes a number and an exponent
function powerDigitSum(num, e) {
    // define variable for power
    var power = BigInt(num ** e);
    // split power into digits
    var splitPower = power.toString().split('');
    var powerDigits = splitPower.map(Number);
    console.log(power)
    console.log(splitPower)
    console.log(powerDigits)
    // calculate sum of digits
    var sum = 0;
    for (var i = 0; i <= powerDigits.length - 1; i++) {
        sum += powerDigits[i];
    }
    console.log(sum)
}

powerDigitSum(2, 1000) //returns 1366 which is correct