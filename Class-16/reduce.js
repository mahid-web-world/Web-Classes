// needed number type array
const numbers = [1, 2, 3, 4, 5, 6]

// basic loop
// let result = 0
// for (let i = 0; i < numbers.length; i++) {
//       result += numbers[i]
// }
// console.log(result)

// using reduce builtin methode
const result = numbers.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
console.log(result)