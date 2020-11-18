## Problem 22: Names Scores
From projecteuler.net:
>Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714. What is the total of all the name scores in the file?

Names Scores was pretty straightforward. I made use of Node's `fs` module which was a fun little change up. `fs` was used to parse through the `names.txt` file and create a massive array of names sorted in alphabetical order. From there I defined a `const = score` that was to hold the alphabet, the index of each letter will be used to assign a "score" to each name. Now onto the function itself.

`names()` starts out with a variable `totalSum = 0`, this is going to increase every time a score of a name is calculated and will hold the final output at the end of the function. Now this is where a massive for loop comes into play, par for the course so far in PE. Inside of the loop, each name will have special characters removed from it since each name is inside quotation marks in the .txt file. Then a sum value for the name is calculated by iterating through each letter of the name and incrementing it by its corresponding value in the `score` array from earlier. Then the sum value for the name is multiplied by its index in the name file and added to the `totalSum` value. Repeat for over five-thousand names and you get a grand total of 871198282! My final solution looks like this:
```
var fs = require('fs');

const score = [
    "A", "B", "C", "D", 
    "E", "F", "G", "H", 
    "I", "J", "K", "L", 
    "M", "N", "O", "P", 
    "Q", "R", "S", "T", 
    "U", "V", "W", "X", 
    "Y", "Z"
]

var list = fs.readFileSync('names.txt').toString().split(',').sort()

function names() {
    var totalSum = 0;

    for (var i = 0; i <= list.length - 1; i++) {
        var name = list[i].replace(/['"]+/g, '')
        var split = name.split('')

        var sum = 0
        for (var j = 0; j < split.length ; j++) {
            sum += score.indexOf(split[j]) + 1
        }

        var sumIndex = sum * (i + 1)
        totalSum += sumIndex
    }
    
    return totalSum
}
```