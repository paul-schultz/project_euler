## Problem 09: Special Pythagorean Triplet

From projecteuler.net:

> A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a&sup2; + b&sup2; = c&sup2;. For example, 3&sup2; + 4&sup2; = 9 + 16 = 25 = 5&sup2;. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

You know when Pythagorean starts getting tossed around you're getting into some real math problems right? This problem seemed a little difficult on the outset but the solution ended up being quite simple once I got on the right track. I learned about a concept called partition theory which has to do with finding all of the possible combinations of numbers that add up to a given number. Partition can be done with Javascript pretty easily using iteration. What I did was create a chain of 3 nested for loops, and if the variables of the loops ever add up to a given number, then that combination is added to an array. This doesn't give me the output that I want though. For instance, if I was trying to find all of the partitions of the number 10 I would get 63 partitions. So I added in some more logic that would only add the partitions that add up to my number and are also Pythagorean triplets, like so:

```
function specialTriplet(num) {
  var arr = [];
  for (var a = 1; a < num; a++) {
    for (var b = 1; b < num; b++) {
      for (var c = 1; c < num; c++) {
        if (a + b + c == num && a ** 2 + b ** 2 == c ** 2) {
          arr.push(`${a}${b}${c}`);
        }
      }
    }
  }
}
```

So if I plug in 1000 I get and array that looks like this: `[200375400, 375200400]`. Which gives us the pythagorean triplet of 200&sup2; + 375&sup2; = 400&sup2; where `a + b + c == 1000` and its equivalent partition with `a` and `b` switched. This is good news, because this is the answer that I want, but it still needs a little tweaking to get the correct format I want for the problem. Maybe the writers of this problem foresaw that people would get two equivalent partitions which is why they asked for the product of the triplet, to have one final number value as the solution. So instead of pushing the partition to `arr` I am going to push the product of `a` `b` & `c`. Then to get rid of the duplicate array value at the end I'm going to use a little ES6 magic, then return the 0 index of the new array just so I get a clean single integer as a final output. For my finished solution, `specialTriplet(1000) = 31875000` and looks like this:

```
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
```
