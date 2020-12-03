import assert from 'assert'

import D1P1Solution from '../1/p1/solution.js' 

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})

describe('Day 1', function() {
  describe('P1', function() {
    describe('Solution', function() {
      describe('#findNums()', function() {
        it('should return an array of 2 numbers that equal the target', function() {
          let arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          let target = 16

          let runner = new D1P1Solution();
          let result = runner.findNums(arrOfNums, target)
          assert.notStrictEqual(result, [7, 9])
        })
      })
    })
  })
})