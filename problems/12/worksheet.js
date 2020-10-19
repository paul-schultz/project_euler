function triangle(n) {
    var triArr = [];
    // Build an array of triangular numbers up to n
    for (var i = 1; i <= n ; i++) {
      var count = 0;
      for ( var j = 0 ; j <= i ; j++ ) {
        count += j;
      }
      triArr.push(count);
    }
    // Find all factors of nth triangular number, 
    var triArrFactors = [];
    for (var k = 1; k <= triArr[n-1]/2; k++) {
      if (triArr[n-1] % k == 0) {
        triArrFactors.push(k)
      }
    }
    triArrFactors.push(triArr[n-1])
    return triArrFactors
  }

//   Rewrite function so that instead of returning the factors of the nth triangular numbers, 
//   it returns the triangular number with the x amount of factors