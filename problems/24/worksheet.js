// Function uses memoization and recursion
function perm(inputArr) {
    var results = [];

    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        
        if (arr.length === 0) {
          results.push(memo.concat(cur));
          
          console.log(`memo = ${memo}`)
          console.log(`cur = ${cur}`)
          console.log(`memo.concat(cur) = ${memo.concat(cur)}`)
          console.log(results)
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);

      }
  
      return results;
    }
  
    var finalArr = permute(inputArr);
    // console.log(permute(inputArr));
    console.log(finalArr)
    return 
    
  }

perm([0, 1, 2]) 
//perm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) returns [2, 7, 8, 3, 9, 1, 5, 4, 6, 0] pretty fast