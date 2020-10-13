// Largest possible product of two 3 digit numbers is 999 * 999 = 998001 

// Define function largestPP that takes digits as a parameter
function largestPP(digits) {
// Iterate down from 998001 by 1
    for(var i = 998001; i >= 0; i--) {
        // Convert number to str

        // Check if number is a palindrone

        // If number is a palindrome, set isPalindrome equal to true
    }
    // If isPalindrome equals true, find all possible factors 
    if (isPalindrome = true) {
        // Find all possible factors for palindrome number

        // If number of factors with digits = number of digits isn't equal to at least two, then go back to for loo
    }
    // Divide palindrome by each factor whose number of digits is equal to the value of the digits parameter

    // If both factors number of digits are equal to the digits parameter, return both factors and the palindrom in an array as the output
}


// Function that checks if number is palindrome
function checkPal(num) {
    var numStr = = num.toString();
    if (numStr == numStr.split('').reverse().join('')) {
        return `${numStr} is a palindrome`
    } else {
        return `${numStr} is not a palindrome`
    }
} 
   
//  Find palindromes in a given range, return array of integers
function findPal(high, low) {
    arr = [];
    for (var i = high; i >= low ; i-- ) {
     var numStr = i.toString();
    if (numStr == numStr.split('').reverse().join('')) {
      var num = parseInt(numStr);
      arr.push(num);
      } 
    }
    return arr;
  }
  
  // findPal(998001, 900000);
  
  // const palindromes = [
    // 997799, 996699, 995599, 994499, 993399, 992299, 991199,
    // 990099, 989989, 988889, 987789, 986689, 985589, 984489,
    // 983389, 982289, 981189, 980089, 979979, 978879, 977779,
    // 976679, 975579, 974479, 973379, 972279, 971179, 970079,
    // 969969, 968869, 967769, 966669, 965569, 964469, 963369,
    // 962269, 961169, 960069, 959959, 958859, 957759, 956659,
    // 955559, 954459, 953359, 952259, 951159, 950059, 949949,
    // 948849, 947749, 946649, 945549, 944449, 943349, 942249,
    // 941149, 940049, 939939, 938839, 937739, 936639, 935539,
    // 934439, 933339, 932239, 931139, 930039, 929929, 928829
    // 927729, 926629, 925529, 924429, 923329, 922229, 921129,
    // 920029, 919919, 918819, 917719, 916619, 915519, 914419,
    // 913319, 912219, 911119, 910019, 909909, 908809, 907709,
    // 906609, 905509, 904409, 903309, 902209, 901109, 900009
  // ]
  
//   Set constant equal to an array of palindromes
  const palindromes = findPal(920000, 900000);
  
  //Return pair of factors with specified number of digits for a number
  function checkFactors(num, digits) {
    var arr = [];
    for ( i = 2, j = num / 2 ; i <= j; i++ ) {
      if (num % i == 0) {
        var k = num / i;
        if (i.toString().length == 3 && k.toString().length == 3){
          arr.push(num);
          arr.push(i);
          arr.push(k);
          console.log(arr);
        }
      }
    }
  }
  
  function test(num) {
    console.log(num);
  }
  
  // checkFactors(979979, 3);
  
//   Iterate over range of plaindromes, returning those that are divisible by two 3-digit numbers
  palindromes.forEach(checkFactors);
  
  





