const maxPath = require('./maxPath') 

test('Four row pyramid', () => { 
    var tri = [
        [3],
        [7, 4],
        [2, 4, 6],
        [8, 5, 9, 3]
    ]
    expect(maxPath(tri)).toBe(23); 
});     


