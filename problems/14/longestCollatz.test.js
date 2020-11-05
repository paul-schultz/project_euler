const longestCollatz = require('./longestCollatz') 

test('871 produces the longest chain for numbers under 1000', () => { 
    expect(longestCollatz(1000)).toBe(871); 
});     

test('77031 produces the longest chain for numbers under 100000', () => { 
    expect(longestCollatz(100000)).toBe(77031); 
}); 

test('837799 produces the longest chain for numbers under 1000000', () => { 
    expect(longestCollatz(1000000)).toBe(837799); 
}); 

