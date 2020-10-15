const sumSquareDifference = require('./sumSquareDifference') 

test('The sum square difference for the first ten natural numbers is 2640', () => { 
    expect(sumSquareDifference(10)).toBe(2640); 
});     

test('The sum square difference for the first 100 natural numbers is 25164150', () => { 
    expect(sumSquareDifference(100)).toBe(25164150); 
});