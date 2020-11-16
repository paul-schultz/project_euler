const thousand_fibonacci = require('./thousand_fibonacci') 

test('the 7th fibonacci term is the first to have 2 digits', () => { 
    expect(thousand_fibonacci(2)).toBe(7); 
}); 

test('the 12th fibonacci term is the first to have 3 digits', () => { 
    expect(thousand_fibonacci(3)).toBe(12); 
});     


test('the 4782nd fibonacci term is the first to have 1000 digits', () => { 
    expect(thousand_fibonacci(1000)).toBe(4782); 
});    
    