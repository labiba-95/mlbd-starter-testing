const substract = require('./substract')

test('properly adds two numbers', () => {
    expect(substract(1, 2)).toBe(-1)
})