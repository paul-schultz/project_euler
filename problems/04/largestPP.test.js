const largestPP = require('./largestPP') 

test('The largest palindrome made from the product of two 2-digit numbers is 9009', () => { 
    expect(largestPP(2)).toBe([91, 99, 9009]); 
});     