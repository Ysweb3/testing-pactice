const reverseString = require('../code/reverseString');
test("abc should be cba",()=>{
    expect(reverseString.input).toBe(reverseString.reverseString);
})
