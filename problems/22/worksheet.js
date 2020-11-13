var fs = require('fs');

var list = fs.readFileSync('names.txt').toString().split(',').sort()

function names() {
    console.log(list[937].replace(/['"]+/g, ''))
}

names()