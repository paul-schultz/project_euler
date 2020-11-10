const factorial = require('./factorial') 

test('sum of 10! is 27', () => { 
    expect(factorial(10)).toBe(27); 
});     

test('sum of 50! is 216', () => { 
    expect(factorial(50)).toBe(216); 
}); 

test('sum of 100! is 648', () => { 
    expect(factorial(100)).toBe(648); 
});