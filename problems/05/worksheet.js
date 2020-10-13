function smallestMultiple() {
    // Start at twenty and increment by 1
    for (var i = 20; 20 <= 1000; i++) {
        // If i is multiple of 1 - 20 return i
      if (
           i % 1 == 0
        && i % 2 == 0
        && i % 3 == 0
        && i % 4 == 0
        && i % 5 == 0
        && i % 6 == 0
        && i % 7 == 0
        && i % 8 == 0
        && i % 9 == 0
        && i % 10 == 0
        && i % 11 == 0
        && i % 12 == 0
        && i % 13 == 0
        && i % 14 == 0
        && i % 15 == 0
        && i % 16 == 0
        && i % 17 == 0
        && i % 18 == 0
        && i % 19 == 0
        && i % 20 == 0
      )
      return i;
    }
  }
  
  smallestMultiple(); //answer is 232792560 which is correct

//   Refactor code so that the number you check multiples up to will be a parameter