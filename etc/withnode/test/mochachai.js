const R = require('ramda')
const assert = require('chai').assert
describe('ramda.js', () => {
  
  it("return '1'", () => {
    assert.equal(
      R.pipe(
        R.join('|'),
        R.head
      )([3,2,3])
        ,
        '1'
    )
  })

})
