function perms(n) {
    var arr = []
    for (var i = 0; i <= n; i++) {
        arr.push(i)
    }

    let result = []

    for (var j = 0; j <= arr.length - 1; i++) {
        const currentNum = arr[j];
        const remainingNums = arr.slice(0, j) + arr.slice(j + 1);

        console.log(currentNum)
        console.log(remainingNums)

        for (let k = 0; k <= remainingNums.length - 1; k++) {
            result.push(currentNum + perms(arr[n-1])[k])
        }
    }

    console.log(result)
}

perms(2)