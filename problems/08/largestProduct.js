function largestProduct(num, digits) {
    var num;
    var splitNum = Array.from(String(num), Number)
    var arr = [];

    for (var i = 0; i <= splitNum.length - digits; i++ ) {
      var numSum = splitNum[i]
      for (var j = 1; j <= digits - 1; j++) {
        numSum *= splitNum[i + j];
      }
      arr.push(numSum)
    }
    
    var maxNum = (Math.max(...arr))
    return maxNum
  }
 
module.exports = largestProduct    