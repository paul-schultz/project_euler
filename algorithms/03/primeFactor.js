function largestPrimeFactor(num) {
    var arr = [];
    var isPrime;
    for (var i = 2, sq = Math.sqrt(num); i <= sq ; i++) {
      if (num % i === 0) {
        for(var j = 2; j <= i/2; j++) {
          if ( i % j == 0) {
            isPrime = false;
          } else {
            isPrime = true;
          }
        }
        if(isPrime = true) {
          num /= i;
          arr.push(i)
        }
      }
    }
    var solution = Math.max(...arr);
    return solution;
  };
  
  
  module.exports = largestPrimeFactor;
  