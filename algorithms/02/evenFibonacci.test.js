const evenFibonacciSum = require('./evenFibonacci');

test('sum of even-valued fibonacci terms whose values do not exceed thirty', () => {
    function fibonacci(n) {
        if( n === 1 || n === 2 ) {
          return n;
        } else {
          return fibonacci(n-1) + fibonacci(n-2)
        }
      }

      function fibonacciUpTo(limit) {
        var n = 1;
        while ( fibonacci(n) < limit ) {
        n++;
        }
        var int = n - 1;
        return int
    }
    
    expect(evenFibonacciSum(fibonacciUpTo(30))).toBe(10);
});

test('sum of even-valued fibonacci terms whose values do not exceed ninety', () => {
    function fibonacci(n) {
        if( n === 1 || n === 2 ) {
          return n;
        } else {
          return fibonacci(n-1) + fibonacci(n-2)
        }
      }

      function fibonacciUpTo(limit) {
        var n = 1;
        while ( fibonacci(n) < limit ) {
        n++;
        }
        var int = n - 1;
        return int
    }

    expect(evenFibonacciSum(fibonacciUpTo(90))).toBe(44);
});

test('sum of even-valued fibonacci terms whose values do not exceed four million', () => {
    function fibonacci(n) {
        if( n === 1 || n === 2 ) {
          return n;
        } else {
          return fibonacci(n-1) + fibonacci(n-2)
        }
      }

      function fibonacciUpTo(limit) {
        var n = 1;
        while ( fibonacci(n) < limit ) {
        n++;
        }
        var int = n - 1;
        return int
    }

    expect(evenFibonacciSum(fibonacciUpTo(4000000))).toBe(4613732);
});