function triangle(n, fac) {
    var triArr = [];
      
    for (var i = 1; i <= n ; i++) {
      var count = 0;
      for ( var j = 0 ; j <= i ; j++ ) {
        count += j;
      }
      triArr.push(count);
    }
    
    for (var k = triArr.length - 1; k >= Math.ceil(triArr.length*0.9) ; k--) {
      var triArrFactors = [];
      for (var l = 1; l <= Math.sqrt(triArr[k]); l++) {
        if (triArr[k] % l === 0) {
          triArrFactors.push(l)
          if (l !== Math.sqrt(triArr[k])) triArrFactors.push(triArr[k]/l);
        }
      }
      if (triArrFactors.length >= fac) {
        return triArr[k]
      }
    }
  }
 
module.exports = triangle    