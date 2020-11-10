function factorial(n) {
    // Creates solves for factorial
    var product = BigInt(n);
    for (var i = n - 1; i >= 1; i-- ) {
        product *= BigInt(i);
        console.log(i)
    }
    console.log(product)

    // Solves for sum of digits in factorial
    var arr = product.toString().split('');
    var sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += parseInt(arr[i])
    }
    
    // Removes array display limit
    console.dir(arr, {'maxArrayLength': null});
    // return sum
    console.log(sum)
}

factorial(50) // equals 648 **correct 