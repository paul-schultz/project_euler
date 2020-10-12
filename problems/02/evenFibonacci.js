function fibonacci(n) {
    if( n === 1 || n === 2 ) {
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2)
    }
  }

function evenFibonacciSum(n) {
    var arr = [];
    for ( var i = 1; i <= n; i++ ) {
        if ( fibonacci(i) % 2 === 0 ){
        arr.push( fibonacci(i) );
        } 
    }
    var sum = arr.reduce( (a, b) => a + b, 0 )
    return sum;
}

function fibonacciUpTo(limit) {
    var n = 1;
    while ( fibonacci(n) < limit ) {
      n++;
    }
    var int = n - 1;
    return int
}

module.exports = evenFibonacciSum;


