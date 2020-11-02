function latticePaths(a,b) {
    var n = a + b;
    var k = a;
    var z = n - k;
    var nB = n,
        kB = k,
        zB = z;
    for (var i = n-1; i >= 1; i--) {
        nB *= i;
    }
    for (var i = k-1; i >= 1; i--) {
        kB *= i;
    }
    for (var i = z-1; i >= 1; i--) {
        zB *= i;
    }
    console.log(a,b)
    console.log(n,k,z)
    console.log(nB, kB, zB)
    var paths = nB / (kB * zB);
    console.log(paths)
}

latticePaths(10,10)