// function triangle(n) {
    // var triArr = [], triArrFactors = [];
    // // Build an array of triangular numbers up to n
    // for (var i = 1; i <= n ; i++) {
    //   var count = 0;
    //   for ( var j = 0 ; j <= i ; j++ ) {
    //     count += j;
    //   }
    //   triArr.push(count);
    // }
//     // Find all factors of nth triangular number, 
    
//     for (var k = 1; k <= triArr[n-1]/2; k++) {
//       if (triArr[n-1] % k == 0) {
//         triArrFactors.push(k)
//       }
//     }
//     triArrFactors.push(triArr[n-1])
//     console.log(`The ${n}th triangular number is ${triArr[n-1]}`)
//     console.log(`${triArr[n-1]} has ${triArrFactors.length} factors`)
//     console.log(triArrFactors);
// }

// triangle(500)

//   triangle(100000) has 120 divisors, going to be a very large number 
//   Rewrite function so that instead of returning the factors of the nth triangular number, 
//   it returns the triangular number with x number of factors


// // Rewriting function to return the first number with an x number of factors
// function triangle(n, fac) {
//   // Iterate from i to the nth triangular number
//   for (var i = 1; i <= n; i++) {
//     var count = 0, triArrFactors = [];
//     for ( var j = 0 ; j <= i ; j++ ) {
//       count += j;
//     }
//     // check number of factors
//     for (var k = 1; k <= count/2; k++) {
//       if (count % k == 0) {
//         triArrFactors.push(k)
//       }
//     }
//     // return first number that meets condition
//     if (triArrFactors.length == fac - 1) {
//       triArrFactors.push(count)
//       console.log(count)
//       console.log(triArrFactors)
//       return
//     }
//   }
// }

// triangle(10000, 501)

// returns array of tri nums
function triNum(n, fac) {
  var triArr = [];
    // Build an array of triangular numbers up to n
  for (var i = 1; i <= n ; i++) {
    var count = 0;
    for ( var j = 0 ; j <= i ; j++ ) {
      count += j;
    }
    triArr.push(count);
  }
  console.log(triArr)
  for (var k = triArr.length - 1; k >= Math.ceil(triArr.length/2) ; k--) {
    var triArrFactors = [];
    for (var l = 1; l <= triArr[k]/2; l++) {
      if (triArr[k] % l == 0) {
        triArrFactors.push(l)
      }
    }
    if (triArrFactors.length == fac - 1) {
      triArrFactors.push(triArr[k])
      console.log(`n = ${k+1}`)
      console.log(triArr[k])
      console.log(triArrFactors)
      return
    }
  }
}

triNum(100, 8)

