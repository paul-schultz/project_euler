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
        // console.log(name)

        var sum = 0
        for (var j = 0; j < split.length ; j++) {
            sum += score.indexOf(split[j]) + 1
            // console.log(sum)
        }
        // console.log(sum)
        var sumIndex = sum * (i + 1)

        totalSum += sumIndex
    }
    
    console.log(totalSum)
}

names() //returns 871198282 which is correct
