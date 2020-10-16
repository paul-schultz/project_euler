function nthPrime(n) {
    var arr = [], primes = [];
    for (var i = 0; i < 1000000; i++) {
        arr.push(true);
    }
    for (var i = 2; i <= Math.sqrt(1000000); i++) {
        if(arr[i]) {
            for (var j = i * i; j < 1000000; j += i) {
                arr[j] = false;
            }
        }
    }
    for (var i = 2; i < 1000000; i++) {
        if(arr[i]) {
            primes.push(i);
        }
    }
    return (primes[n-1]);
} 

// nthPrime(10001); 104743
 
module.exports = nthPrime   