function combos(num) { 
    var arr = [];
    // Iterates through every combination of integers whose sum is num
    for (var a = 1; a < num; a++) {
      for (var b = 1; b < num; b++) {
        for (var c = 1; c < num; c++) {
          // If sum is num and series is pythagorean triplet then push the product to arr
          if (a + b + c == num && a**2 + b**2 == c**2) {
            // Finds the numbers 200, 375, 425
            arr.push(a*b*c)
          }
        }
      }
    }
    // Function returns two values, for 200*375*425 and 375*200*425
    var cleanArr = [...new Set(arr)];
    return cleanArr[0]
  }
  
  combos(1000) // returns 31875000 : correct