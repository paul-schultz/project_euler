const triangle = require('./triangle') 

test('test caption', () => { 
    expect(triangle(12600, 500)).toBe(76576500); 
});     