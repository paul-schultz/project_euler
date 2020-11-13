const sunday = require('./sunday') 

test('9 first day sundays from 1901 though 1905', () => { 
    expect(sunday(1901, 1905)).toBe(9); 
});     

test('171 first day sundays from 1901 though 2000', () => { 
    expect(sunday(1901, 2000)).toBe(171); 
});     