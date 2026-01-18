const object = require('../code/analyzeArray')


test('analyze this!', () => {
    const input = object([1, 2, 3, 4])
    const expected = { 
        max: 4,
        min: 1,
        length: 4,
        average: 2.5,
    }

    expect(input).toEqual(expected)
})