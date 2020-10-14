const smallestMultiple = require('./smallestMultiple') 

test('The smallest multiple of 1 through 10 is 2520', () => { 
    expect(smallestMultiple(10)).toBe(2520); 
});     

test('The smallest multiple of 1 thorugh 20 is 232792560', () => { 
    expect(smallestMultiple(20)).toBe(232792560); 
});     