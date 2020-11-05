// function that takes a number and returns its collatz sequence
function collatz(num) {
    var arr = [];
    arr.push(num)
    while (num > 1) {
        if (num % 2 == 0) {
            num /= 2
            arr.push(num)
        } else {
            num *= 3 
            num += 1
            arr.push(num)
        } 
    }
    console.log(arr)
    console.log(arr.length)
}

// function that takes a number n, returns collatz sequences for number up to that value
function collatzUpTo(n) {
    var collatzArr = [];
    for (var i = 1; i <= n; i++) {
        var arr = [];
        if (i == 1) {
            arr.push(i);
            collatzArr.push(arr)
            // console.log(collatzArr)
        } else if (i == 2) {
            arr.push(i)
            arr.push(1)
            collatzArr.push(arr)
            // console.log(collatzArr)
        } else {
            arr.push(i)
            var j = i;
            while (j > 1) {
                if (j % 2 == 0) {
                    j /= 2
                    arr.push(j)
                } else {
                    j *= 3 
                    j += 1
                    arr.push(j)
                } 
            }
            collatzArr.push(arr);
            
        }
    }
    console.log(collatzArr)
}

// constant for the array of collatz sequences below 1 million
// const millionCollatz = collatzUpTo(999999)

// function that takes an integer n, returns the starting 
// number of the longest collatz sequence up to n
function longestCollatz(n) {
    var collatzArr = [];
    for (var i = 1; i <= n; i++) {
        var arr = [];
        if (i == 1) {
            arr.push(i);
            collatzArr.push(arr)
            // console.log(collatzArr)
        } else if (i == 2) {
            arr.push(i)
            arr.push(1)
            collatzArr.push(arr)
            // console.log(collatzArr)
        } else {
            arr.push(i)
            var j = i;
            while (j > 1) {
                if (j % 2 == 0) {
                    j /= 2
                    arr.push(j)
                } else {
                    j *= 3 
                    j += 1
                    arr.push(j)
                } 
            }
            collatzArr.push(arr);
        }
    }

    // console.log(collatzArr)

    var latzLength = [];
    for (var i = 0; i <= n-1; i++) {
        latzLength.push(collatzArr[i].length)
    }
    var longest = latzLength.reduce((max, v) => max >= v ? max : v, -Infinity);
    console.log(longest)
    var longestIndex = latzLength.indexOf(longest)
    // console.log(latzLength)
    console.log(`The Collatz sequence that begins with ${collatzArr[longestIndex][0]} is the longest`)
}

// collatz(13)
// collatzUpTo(10);
longestCollatz(1000000)


// function longestCollatz() {}