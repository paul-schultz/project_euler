// Basic fibonacci sequence using recursion
function fibonacci(n) {
    if(n === 1 || n === 2) {
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2)
    }
  }
  
  // Returning an array of fibonacci numbers up to n
  function fibonacciArray(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
      arr.push(fibonacci(i));
    }
    return arr;
  }
  
  // Return an array of even fibonacci numbers
  function evenFibonacciArray(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
      if ( fibonacci(i) % 2 === 0 ){
        arr.push(fibonacci(i));
      } 
    }
    return arr;
  }
  
  // Return the sum of the even fibonacci numbers 
  function evenFibonacciSum(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
      if ( fibonacci(i) % 2 === 0 ){
        arr.push(fibonacci(i));
      } 
    }
    var sum = arr.reduce((a, b) => a + b, 0)
    return sum;
  }
  
  // Rather than taking n as an input, take a number as a ceiling and return all of the fibonacci numbers up to that point
  
  function fibonacciUpTo(limit) {
  //  while output is lower than limit, find highest possible n value
    var n = 1;
    while (fibonacci(n) < limit) {
      // fibonacci(n);
      n++;
    }
    var int = n - 1;
    return int
  // then plug int value into evenFibonacciSum equation 
  }
  
  // fibonacci(10); 
  // fibonacciArray(10);
  // evenFibonacciArray(10);
  evenFibonacciSum(fibonacciUpTo(4000000)); // Output is 4613732 (correct answer)
  // evenFibonacciSumUpTo(14);
  