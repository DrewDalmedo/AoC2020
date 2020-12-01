/*
PROBLEM:
Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

import fs from 'fs';

const getInput = (path) => {
  // convert each element in the array into a number
  const sanitize = (arr) => {
    return arr.map( (num) => parseInt(num) )
  }
  
  // read inputs from file and separate each new line into an element in an array
  let input = fs.readFileSync(path).toString().split("\n")
  // return sanitized array
  return sanitize(input)
}

// time complexity: O(n^2) (terrible!!)
const findNums = (arr, target) => {
  for (let x = 0; x < arr.length; x++) 
    for (let y = x + 1; y < arr.length; y++) 
      if (arr[x] + arr[y] === target)
        return [ arr[x], arr[y] ]
    
  return null 
}

let nums = getInput('./input.txt')

let targetNums = findNums(nums, 2020)

if (targetNums !== null) {
  console.log( targetNums[0] * targetNums[1] )
}
else {
  console.log( 'no solution found' )
}