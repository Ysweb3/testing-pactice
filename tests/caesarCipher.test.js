const caesarCipher = require('../code/caesarCipher')

test('making the shift', () => {
    const wrapping = caesarCipher('xyz', 3)
    expect(wrapping).toBe('abc')
    
    const casePreservation = caesarCipher('HeLLo', 3)
    expect(casePreservation).toBe('KhOOr')

    const punctuation = caesarCipher('Hello, World!', 3)
    expect(punctuation).toBe('Khoor, Zruog!')
})