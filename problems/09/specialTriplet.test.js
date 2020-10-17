const specialTriplet = require('./specialTriplet') 

test('if a^2 + b^2 = c^2, and a + b + c = 1000, abc = 31875000', () => { 
    expect(specialTriplet(1000)).toBe(31875000); 
});     