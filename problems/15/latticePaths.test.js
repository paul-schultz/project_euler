const latticePaths = require('./latticePaths') 

test('A 2x2 grid has 6 routes', () => { 
    expect(latticePaths(2,2)).toBe(6); 
});     

test('A 5x10 grid has 3003 routes', () => { 
    expect(latticePaths(5,10)).toBe(3003); 
});     

test('A 12x10 grid has 646646 routes', () => { 
    expect(latticePaths(12,10)).toBe(646646); 
});  

test('A 20x20 grid has 137846528820 routes', () => { 
    expect(latticePaths(20,20)).toBe(137846528820); 
});  