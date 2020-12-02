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

// utility functions
const separateData = (line) => {
  return line.split(' ')
}

const separateBounds = (bounds) => {
  return bounds.split('-').map( (bound) => parseInt(bound) ) 
}

const sanitizeRequiredLetter = (letter) => {
  return letter.slice(0, -1)
}

// check whether a given password is valid
const validate = (data) => {
  if (data === undefined)
    return false 
  
  let bounds = data[0]
  let target = data[1]
  let password = data[2]

  let occurrences = ''

  password.split('').forEach( letter => {
    if (letter === target) 
      occurrences += letter
  });
  
  if (occurrences.length >= bounds[0] && occurrences.length <= bounds[1])
    return true 

  return false
}

// transform an input line into something which can be validated
const sanitizeInput = (input) => {
  //console.log(input)
  if (input === '')
    return

  let separatedInput = separateData(input)
  separatedInput[0] = separateBounds(separatedInput[0])
  separatedInput[1] = sanitizeRequiredLetter(separatedInput[1])

  return separatedInput
}

// return a list of valid passwords (empty if there are none)
const findValidPasswords = (passwords) => {
  return passwords.filter( validate )
}

// get the inputs from the provided file and sanitize them
let passwordInputs = Input.getInput('./input.txt').map(sanitizeInput)

// print the number of valid passwords
console.log(findValidPasswords(passwordInputs).length)

/*
let testData = '1-3 a: abcde'
let separatedTestData = separateData(testData)
separatedTestData[0] = separateBounds(separatedTestData[0])
separatedTestData[1] = sanitizeRequiredLetter(separatedTestData[1])

console.log(testData)
console.log(separatedTestData)
console.log(validate(separatedTestData))
*/