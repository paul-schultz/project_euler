
function largestPrimeFactor(num) {
    // Define array to hold factors and a boolean to designate whether a number is prime or not
    var arr = [];
    var isPrime;
    // Find all factors up to square root
    for (var i = 2, sq = Math.sqrt(num); i <= sq ; i++) {
      if (num % i === 0) {
        //   Check if factor is prime
        for(var j = 2; j <= i/2; j++) {
          if ( i % j == 0) {
            isPrime = false;
          } else {
            isPrime = true;
          }
        }
        // If factor is prime push to array
        if(isPrime = true) {
            // Divide integer by prime factor
          num /= i;
          arr.push(i)
        }
      }
    }
    var solution = Math.max(...arr);
    // find largest prime factor in array
    return solution;
  };
  
  
  largestPrimeFactor(600851475143)
  