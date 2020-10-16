test('The largest palindrome made from the product of two 2-digit numbers is 9009', () => { 
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

    const palindromes = findPal(10000, 9000);

    function checkFactors(num) {
        var arr = [];
        for ( i = 2, j = num / 2 ; i <= j; i++ ) {
          if (num % i == 0) {
            var k = num / i;
            if (i.toString().length == 2 && k.toString().length == 2) {
              arr.push(num);
              arr.push(i);
              arr.push(k);
              let cleanOutput = [...new Set(arr)];
              // console.log(cleanOutput)
            } 
          }
        }
      }
    
    function largestPP() {
        palindromes.forEach(checkFactors);
    }

    expect(largestPP()).toBe(
        [ 9009, 91, 99 ]
        [ 9009, 91, 99 ]
    ); 
});     

test('The largest palindrome made from the product of two 3-digit numbers is 906609', () => { 
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

    const palindromes = findPal(910000, 900000);

    function checkFactors(num) {
        var arr = [];
        for ( i = 2, j = num / 2 ; i <= j; i++ ) {
          if (num % i == 0) {
            var k = num / i;
            if (i.toString().length == 3 && k.toString().length == 3) {
              arr.push(num);
              arr.push(i);
              arr.push(k);
              let cleanOutput = [...new Set(arr)];
              // console.log(cleanOutput)
            } 
          }
        }
      }
    
    function largestPP() {
        palindromes.forEach(checkFactors);
    }

    expect(largestPP()).toBe(
        [ 906609, 913, 993 ]
        [ 906609, 913, 993 ]
        ); 
});     