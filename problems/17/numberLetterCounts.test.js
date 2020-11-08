const count = require('./numberLetterCounts') 

test('21124 letters in 1 - 1000', () => { 
    expect(count(1000)).toBe(21124); 
});     