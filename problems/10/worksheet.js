function primeSum(num) {
    var arr = [], primes = [];
    for (var i = 0; i < num; i++) {
        arr.push(true);
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if(arr[i]) {
            for (var j = i * i; j < num; j += i) {
                arr[j] = false;
            }
        }
    }
    for (var i = 2; i < num; i++) {
        if(arr[i]) {
            primes.push(i);
        }
    }
    var sum = (primes.reduce((a, b) => a + b, 0));
    console.log(sum);
    return sum;
} 

primeSum(10); // 17: Correct
primeSum(2000000); // 142913828922: Correct
