const evenFibonacciSum = require('./evenFibonacci');
const fibonacciUpTo = require('./evenFibonacci');

test('sum of even-valued fibonacci terms whose values do not exceed thirty', () => {
    expect(evenFibonacciSum(fibonacciUpTo(30)).toBe(10);
});

test('sum of even-valued fibonacci terms whose values do not exceed ninety', () => {
    expect(evenFibonacciSum(fibonacciUpTo(90))).toBe(44);
});

test('sum of even-valued fibonacci terms whose values do not exceed four million', () => {
    expect(evenFibonacciSum(fibonacciUpTo(4000000))).toBe(4613732);
});