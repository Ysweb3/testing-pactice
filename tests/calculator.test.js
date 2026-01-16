const calculator = require('../code/calculator')

test('whatever', () => {
    const add = calculator.add(4, 8)
    expect(add).toBe(12)

    const subtract = calculator.subtract(4, 8)
    expect(subtract).toBe(-4)

    const multiply = calculator.multiply(4, 8)
    expect(multiply).toBe(32)

    const divide = calculator.divide(8, 4)
    expect(divide).toBe(2)
})