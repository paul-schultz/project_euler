const ones = [
    'one',
    'two',
    'three',
    'four',
    'five', 
    'six',
    'seven',
    'eight', 
    'nine',
]

const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
]

const onePlace = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five', 
    'six',
    'seven',
    'eight', 
    'nine',
]

const tenthPlace = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
]


function count(n) {
    var numbers = "";
    var to99 = [];

    for (var i = 0; i <= n; i++) {
        if (i < 9) {
            numbers += ones[i]
            to99.push(ones[i])
        }
        if (9 <= i && i < 19) {
            numbers += teens[i-9]
            to99.push(teens[i-9])
        }
        if (20 <= i && i <= 99) {
            var int = i.toString().split('')
            numbers += (tenthPlace[parseInt(int[0])-2])
            numbers += (onePlace[parseInt(int[1])])
            to99.push(tenthPlace[parseInt(int[0])-2] + " " + onePlace[parseInt(int[1])])
        }
        if (100 <= i && i <= 999) {
            var int = i.toString().split('')
            var hundredPlace = ones[parseInt(int[0] - 1)]
            var otherNum = parseInt(int[1] + int[2])
            if (int[1] == 0 && int[2] == 0) {
                numbers += hundredPlace + " hundred"
             } else {
                var threeDigit = hundredPlace + " hundred and " + to99[otherNum - 1]
                numbers += threeDigit
            }
        }
        if (1000 <= i) {
            numbers += "one thousand"
        }
    }
    
    var arr = numbers.split('');
    array = arr.filter(function(str) {
        return /\S/.test(str);
    });
    
    return array.length
}

count(1000)
 
module.exports = count    