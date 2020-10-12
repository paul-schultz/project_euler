const threeAndFive = require('./threeAndFive');

test('sum of multiples of 3 and 5 below 10 is 23', () => {
    expect(threeAndFive(10)).toBe(23);
});

test('sum of multiples of 3 and 5 below 1000 is 233168', () => {
    expect(threeAndFive(1000)).toBe(233168);
});

