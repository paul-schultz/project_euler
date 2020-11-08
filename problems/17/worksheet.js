// Function that counts number of letters of 1 - 9
// const words = [
//     'one',
//     'two',
//     'three',
//     'four',
//     'five', 
//     'six',
//     'seven',
//     'eight', 
//     'nine',
//     'ten',
//     'eleven',
//     'twelve',
//     'thirteen',
//     'fourteen',
//     'fifteen',
//     'sixteen',
//     'seventeen',
//     'eighteen',
//     'nineteen',
//     'twenty'
// ]
// // Numbers up to twenty
// function count(n) {
//     var numbers = "";
//     for (var i = 0; i <= n - 1; i++) {
//         if (i < 20) {
//             numbers += words[i];
//         }
//     }
//     var arr = numbers.split("");
//     console.log(arr)
//     console.log(arr.length)
// }

// count(5)

// One through ninety nine
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
    // Create array that holds 1 - 99 values to resuse
    // When i > 100
    var to99 = [];
    for (var i = 0; i <= n; i++) {
        if (i < 9) {
            numbers += ones[i]
            to99.push(ones[i])
            // console.log(ones[i])
        }
        if (9 <= i && i < 19) {
            numbers += teens[i-9]
            to99.push(teens[i-9])
            // console.log(teens[i-9])
        }
        if (20 <= i && i <= 99) {
            var digit = i.toString().split('')
            numbers += (tenthPlace[parseInt(digit[0])-2])
            numbers += (onePlace[parseInt(digit[1])])
            to99.push(tenthPlace[parseInt(digit[0])-2] + " " + onePlace[parseInt(digit[1])])
            // console.log(`${tenthPlace[parseInt(digit[0])-2]} ${onePlace[parseInt(digit[1])]}`)
        }
        if (100 <= i && i <= 999) {
            var digit = i.toString().split('')
            var hundredPlace = ones[parseInt(digit[0] - 1)]
            var otherNum = parseInt(digit[1] + digit[2])
            // handles even hundreds where there are two zeroes
            if (digit[1] == 0 && digit[2] == 0) {
                // console.log(hundredPlace + " hundred") 
                numbers += hundredPlace + " hundred"
                // Otherwise just pops on the value from 1 - 99 array
             } else {
                var threeDigit = hundredPlace + " hundred and " + to99[otherNum - 1]
                // console.log(threeDigit)
                numbers += threeDigit
            }
        }
        if (1000 <= i) {
            // console.log("one thousand")
            numbers += "one thousand"
        }
    }
    
    var arr = numbers.split('');
    // Remove spaces from data
    array = arr.filter(function(str) {
        return /\S/.test(str);
    });
    console.dir(array, {'maxArrayLength': null});
    console.log(array.length)
}

count(1000) // solution is correct 21124
