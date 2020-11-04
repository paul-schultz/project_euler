// Function that counts number of letters of 1 - 9
const words = [
    'one',
    'two',
    'three',
    'four',
    'five', 
    'six',
    'seven',
    'eight', 
    'nine',
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
    'twenty'
]
function numberLetterCounts(n) {
    var numbers = "";
    for (var i = 0; i <= n - 1; i++) {
        if (i < 20) {
            numbers += words[i];
        }
    }
    var arr = numbers.split("");
    console.log(arr)
    console.log(arr.length)
}

numberLetterCounts(15)

// Function that can count letters up to 1000