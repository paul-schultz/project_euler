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
    var to99 = [];
    for (var i = 0; i <= n; i++) {
        if (i < 9) {
            numbers += ones[i]
            to99.push(ones[i])
            console.log(ones[i])
        }
        if (9 <= i && i < 19) {
            numbers += teens[i-9]
            to99.push(teens[i-9])
            console.log(teens[i-9])
        }
        if (20 <= i) {
            var digit = i.toString().split('')
            numbers += (tenthPlace[parseInt(digit[0])-2])
            numbers += (onePlace[parseInt(digit[1])])
            console.log(`${tenthPlace[parseInt(digit[0])-2]} ${onePlace[parseInt(digit[1])]}`)
            // group values into 1 to 99 array to be used later
        }
    }
    
    var arr = numbers.split("");
    console.log(arr)
    console.log(arr.length)
    console.log(to99)
}

count(23)
