function latticePaths(a,b) {
    var n = a + b,
        k = a,
        z = n - k;
    
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
    
    var paths = Math.floor(nB / (kB * zB));
    return paths 
}
 
module.exports = latticePaths    