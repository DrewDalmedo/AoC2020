import fs from 'fs'

export default class Input {
  static getInput(path) {
    // read inputs from file and separate each new line into an element in an array
    let input = fs.readFileSync(path).toString().split("\n")
    // return array
    return input
  }

  static sanitizeToInt(arr) {
    return arr.map( num => parseInt(num) )
  }
}