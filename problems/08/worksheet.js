function largestProduct(num, digits) {
    var num;
    var splitNum = Array.from(String(num), Number)
    var arr = [];
    console.log(splitNum);
    for (var i = 0; i <= splitNum.length - digits; i++ ) {
      var numSum = splitNum[i]
      // This code needs to be refactored to repeat dependent on the size of the digits parameter 
                 * splitNum[i+1]
                 * splitNum[i+2] 
                 * splitNum[i+3]
                 * splitNum[i+4]
                 * splitNum[i+5]
                 * splitNum[i+6]
                 * splitNum[i+7]
                 * splitNum[i+8]
                 * splitNum[i+9]
                 * splitNum[i+10]
                 * splitNum[i+11]
                 * splitNum[i+12]
                 ;
      arr.push(numSum)
    }
    console.log(arr);
    console.log(Math.max(...arr))
  }
  
//   Large number was being passed as an 1.1328476 x e^12, which was putting e, . , x in my array and 
//   returning NaN's because the symbols were being passed to the array. 
//   So I passed the  number in as a string instead then converted the split string values
//   into integers to clean up the data.
  largestProduct('7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450', 13)
// This solution is correct, answer is 