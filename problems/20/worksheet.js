function factorial(n) {
    var product = n;
    for (var i = n - 1; i >= 1; i-- ) {
        product *= i;
        console.log(i)
    }
    console.log(BigInt(product))
    var arr = BigInt(product).toString().split('');
    var sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += parseInt(arr[i])
    }
    
    console.dir(arr, {'maxArrayLength': null});
    console.log(sum)
}

factorial(100)