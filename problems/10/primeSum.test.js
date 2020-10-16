const primeSum = require('./primeSum') 

test('Sum of prime numbers less than 10 is 17', () => { 
    expect(primeSum(10)).toBe(17); 
});     

test('Sum of prime numbers less than 2 million is 142913828922', () => { 
    expect(primeSum(2000000)).toBe(142913828922); 
});     