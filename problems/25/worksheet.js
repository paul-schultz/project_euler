function fibonacci(n) {
    var arr = [] // Originally had a second array here that held fibLength for every value 
    // which made the function incredibly slow, so what I did was hold fiblength as a variable
    // which got reset to zero after each iteration which saved a lot of memory
    // Also called the function using memoization instead of recursively calling it like I did 
    // in previous smaller scale fibonacci problems
    for (var i = 1; i <= 10000 ; i++) {
        var fibLength = 0
        if (i == 1 || i == 2) {
            arr.push(1)
            fibLength = parseInt(arr[i-1].toString().length)
        } else {
            arr.push(BigInt(arr[i - 2]) + BigInt(arr[i - 3]))
            fibLength = parseInt(arr[i-1].toString().length)
        }
        if (fibLength == n) {
            console.log(i)
            console.log(BigInt(arr[i-1]))
            console.log(fibLength)
            return
        }
    }
}

fibonacci(3)

