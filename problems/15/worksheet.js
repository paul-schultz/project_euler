function latticePaths(a,b) {
    // Number of lattice paths equal to binomial coefficient of a + b over a
    // Take input as grid dimensions then convert a+b into n and a into k
    var n = a + b;
    var k = a;
    var z = n - k;
    // Variables for var!
    var nF = n,
        kF = k,
        zB = z;
    // compute var! for n k and z
    for (var i = n-1; i >= 1; i--) {
        nF *= i;
    }
    for (var i = k-1; i >= 1; i--) {
        kF *= i;
    }
    for (var i = z-1; i >= 1; i--) {
        zF *= i;
    }
    console.log(a,b)
    console.log(n,k,z)
    console.log(nF, kF, zF)
    // Find solution using computed var!'s
    var paths = nF / (kF * zF);
    console.log(paths)
}

latticePaths(10,10)