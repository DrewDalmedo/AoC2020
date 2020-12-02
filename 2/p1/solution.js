/*
~~~~~
problem:
~~~~~
The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?

~~~~~
my notes:
~~~~~
can separate input data by white space
bound limits can be separated by '-'
bigger picture: return either an array of valid passwords or return null / empty array
  - recursion may be good for working through the array

looking for the LENGTH of the final array, not the passwords themselved
*/

import Input from '../../InputManager/Input.js'

const separateData = (line) => {
  return line.split(' ')
}

const separateBounds = (bounds) => {
  return bounds.split('-').map( (bound) => parseInt(bound) ) 
}

const sanitizeRequiredLetter = (letter) => {
  return letter.slice(0, -1)
}


let passwordInputs = Input.getInput('./input.txt')

let testData = passwordInputs[0]
let separatedTestData = separateData(testData)
separatedTestData[0] = separateBounds(separatedTestData[0])
separatedTestData[1] = sanitizeRequiredLetter(separatedTestData[1])

console.log(testData)
console.log(separatedTestData)