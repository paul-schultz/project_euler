function latticePaths(a,b) {
    // Number of lattice paths equal to binomial coefficient of a + b over a
    // Take input as grid dimensions then convert a+b into n and a into k
    var n = a + b;
    var k = a;
    var z = n - k;
    // Variables for var!
    var nB = n,
        kB = k,
        zB = z;
    // compute var! for n k and z
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
    // Find solution using computed var!'s
    var paths = nB / (kB * zB);
    console.log(paths)
}

latticePaths(10,10)