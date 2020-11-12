// find proper divisors of a number
// function divisors(num) {
//     var amiNums = [];
//     for (var k = 1; k <= num/2; k++) {
//         if (num % k == 0) {
//         amiNums.push(k)
//         }
//     }
//     console.log(amiNums)
    
//     var sum = 0;
//     for (var i = 0; i <= amiNums.length - 1; i++) {
//         sum += amiNums[i]
//     }

//     console.log(sum)
// }

// divisors(2620)
// divisors(2924)

// build an array of nested arrays up to n, each containing d(n), b and a
function amicable(n) {
    //aArr is array of number from 1 to n
    //bArr is the sum of its proper divisors
    var aArr = [], bArr = [];
    for (var i = 1; i <= n; i++) {
        var d = [];
        var a = i;
        var b = 0;
        for (var k = 1; k <= a/2; k++) {
            if (a % k == 0) {
            d.push(k)
            }
        }
        for (var j = 0; j <= d.length - 1; j++) {
            b += d[j]
        }
        aArr.push(a)
        // console.log(d)
        bArr.push(b)
        // console.log(" ")
    }

    // equal to eachother
    // console.log(aArr.indexOf(220))
    // console.log(bArr.indexOf(284))

    // equal to eachother
    // console.log(aArr.indexOf(284))
    // console.log(bArr.indexOf(220))

    // console.log(aArr[219])
    // console.log(bArr[283])

    // console.log(bArr[219])
    // console.log(aArr[283])

    // console.log(bArr.length, aArr.length)

    // At this point I wrote a loop to iterate through every even number 
    // and check its amicability, but it took too long, I changed the loops
    // to iterate through the odd numbered array items and it was much faster
    var ami = []
    for (var i = 1; i <= aArr.length; i+=2) {
        for (var k = 1; k <= bArr.length; k+=2) {
            if (aArr[i] == bArr[k] 
             && aArr[k] == bArr[i]
            //  This line was added in to remove all of the
            //  perfect numbers, leaving only amicable pairs
             && i !== k
             ) {
                ami.push(aArr[i])
            }
        }
    }
    // console.log(bArr)
    // var uniq = [...new Set(ami)];
    // console.log(uniq)
    console.log(ami)

    // console.log(bArr[2619])
    // console.log(aArr[2923])

    // console.log(aArr[2619])
    // console.log(bArr[2923])

    var sum = 0;
    for (var i = 0; i <= ami.length - 1; i++) {
        sum += ami[i]
        // console.log(ami[i])
    }
    console.log(sum)
}


amicable(10000)