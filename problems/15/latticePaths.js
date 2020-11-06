function latticePaths(a,b) {
    var n = a + b,
        k = a,
        z = n - k;
    
    var nF = n,
        kF = k,
        zF = z;
    
    for (var i = n-1; i >= 1; i--) {
        nF *= i;
    }
    for (var i = k-1; i >= 1; i--) {
        kF *= i;
    }
    for (var i = z-1; i >= 1; i--) {
        zF *= i;
    }

    var paths = Math.floor(nF / (kF * zF));
    return paths 
}
 
module.exports = latticePaths    