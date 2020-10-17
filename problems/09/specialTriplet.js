function specialTriplet(num) {
  var arr = [];
  for (var a = 1; a < num; a++) {
    for (var b = 1; b < num; b++) {
      for (var c = 1; c < num; c++) {
        if (a + b + c == num && a ** 2 + b ** 2 == c ** 2) {
          arr.push(a * b * c);
        }
      }
    }
  }
  var cleanArr = [...new Set(arr)];
  return cleanArr[0];
}

module.exports = specialTriplet;
