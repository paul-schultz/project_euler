// First attempt, function works up to 49
function nthPrime(n) {
    var arr = [2];
    var count = 0;
    var isPrime;
    for (var i = 3; ; i++) {
        if (i <= 36) {
            var q = i/2 + 1;
        } else {
            var q = Math.sqrt(i);
        }
        for (var j = 2; j <= q ; j++) {
            if (i % 2 == 0) {
                isPrime = false;
                i++;
            } else if (i % j == 0) {
                isPrime = false;
                i++;
            } else {
              isPrime = true;
            }
        } if (isPrime = true) {
            arr.push(i);
            count += 1;
        }
        if (count === n) {
            arr.splice(-1,1)
            console.log(arr);
            console.log(count);
            return
          }
      }
      
    }

//  Found out about the sieve, tried my hand at it, still only worked up until
// 121
function sieve(n) {
    var arr = [];
    var count = 0;
    var isPrime;
    for (var i = 2; ; i++) {
      if (i == 2 || i == 3 || i == 5 || i == 7) {
        isPrime = true
      } else if (  i % 2 == 0 
                 || i % 3 == 0
                 || i % 4 == 0
                 || i % 5 == 0
                 || i % 6 == 0
                 || i % 7 == 0
                 || i % 8 == 0
                 || i % 9 == 0
                 || i % 10 == 0
                 || i % 11 == 0
                 || i % 12 == 0
                 || i % 13 == 0
                 || i % 14 == 0
                 || i % 15 == 0
                 || i % 16 == 0
                 || i % 17 == 0
                 || i % 18 == 0
                 || i % 19 == 0
                 || i % 20 == 0
                 || i % 21 == 0
                 ) {
        isPrime = false;             
      } else {
        isPrime = true;
      }
      if (isPrime == true) {
        arr.push(i);
        count += 1;
      }
      if (count == n) {
        console.log(count)
        return arr;
      }
    }
  }
  
  sieve(100)
    
  nthPrime(100);
  
//   Second sieve with totally different approach
  function eratosthenes(n) {
    // Eratosthenes algorithm to find all primes under n
    // Define a starting array and a second array of sieved values
    var array = [], output = [];
    // Make an array from 2 to 1000000
    for (var i = 0; i < 1000000; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5
    for (var i = 2; i <= Math.sqrt(1000000); i++) {
        if (array[i]) {
            for (var j = i * i; j < 1000000; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < 1000000; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    // Have output returned as the nth value rather than the full array
    return output[n-1];
};

eratosthenes(100) // 541
eratosthenes(10001) // 104743

