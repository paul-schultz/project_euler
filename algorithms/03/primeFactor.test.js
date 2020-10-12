const largestPrimeFactor = require('./primeFactor');

test('largest prime factor of 13195 is 29', () => {
    expect(largestPrimeFactor(13195)).toBe(29);
})

test('largest prime factor of 600851475143 is 6857', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
})
