const powerDigitSum = require('./powerDigitSum') 

test('sum of the digits of 2^15 is 26', () => { 
    expect(powerDigitSum(2, 15)).toBe(26); 
});  

test('sum of the digits of 2^32 is 58', () => { 
    expect(powerDigitSum(2, 32)).toBe(58); 
});  

test('sum of the digits of 2^1000 is 1366', () => { 
    expect(powerDigitSum(2, 1000)).toBe(1366); 
});     