function smallestMultiple(num) {
    var multiples = 0
    for (var i = 1; ; i++) {
      for (var j = 1; j <= num; j++) {
        if ( i % j == 0) {
          multiples += 1 ;
          } else {
            j++;
            multiples = 0;
          }
      } if (multiples == num) {
        return i;
      }
    } 
  }

module.exports = smallestMultiple;