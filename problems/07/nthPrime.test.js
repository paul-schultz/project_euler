const nthPrime = require('./nthPrime') 

test('6th prime number is 13', () => { 
    expect(nthPrime(6)).toBe(13); 
});     

test('10001st prime number is 104743', () => { 
    expect(nthPrime(10001)).toBe(104743); 
});     