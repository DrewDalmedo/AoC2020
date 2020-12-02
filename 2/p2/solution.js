/*
~~~~~
problem:
~~~~~
While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?
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
  
  let bounds = data[0].map( index => index - 1 )
  let target = data[1]
  let password = data[2].split('')

  if (password[bounds[0]] === target && password[bounds[1]] === target) {
    return false
  }
  else if (password[bounds[0]] !== target && password[bounds[1]] !== target) {
    return false
  }
  else {
    return true 
  }

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
