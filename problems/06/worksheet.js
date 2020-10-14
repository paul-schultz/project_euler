// Function to find the sum of squares
function sumOfSquares(n) {
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sum += ( i ** 2)
    }
    console.log(sum);
  }

//   Function to find the square of the sum
  function squareOfSum(n) {
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sum += i
    }
    var sqSum = sum ** 2
    console.log(sqSum); 
  }
  
//   Function to find the sum square difference
  function sumSquareDifference(n) {
    var sumSq = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sumSq += ( i ** 2)
    }
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
      sum += i
    }
    var sqSum = sum ** 2
    console.log(sqSum - sumSq);
  }
  
  sumOfSquares(10); // 385
  squareOfSum(10); // 3025
  sumSquareDifference(10); // 2640
  sumSquareDifference(100); // 25164150
  