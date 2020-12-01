/*
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

// reuse getInput function from p1 solution
// bug: importing the function runs the entire p1 solution itself, not ideal.
import { getInput } from '../p1/solution.js'

// time complexity: O(n^3) (VERY terrible!!!!!)
const findNums = (arr, target) => {
  for (let x = 0; x < arr.length; x++) 
    for (let y = x + 1; y < arr.length; y++) 
      for (let z = y + 1; z < arr.length; z++)
        if (arr[x] + arr[y] + arr[z] === target)
          return [ arr[x], arr[y], arr[z] ]
    
  return null 
}


let input = getInput('./input.txt')

let targetNums = findNums(input, 2020)

if (targetNums !== null) {
  console.log( targetNums[0] * targetNums[1] * targetNums[2] )
}
else {
  console.log( 'no solution found' )
}