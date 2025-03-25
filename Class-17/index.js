function printName(name) {
      if (typeof name !== 'string') {
            return "Invalid String!"
      }
      return name
}


// problem-2
function sum(a, b) {
      // if (typeof a !== "number" || typeof b !== 'number') {
      //       return ("Invalid Number!")
      // }
      if (typeof a !== "number" || typeof b !== 'number') return ("Invalid Number!")
      return a + b
}

// problem-3
function findMax(numbers) {
      if (!Array.isArray(numbers)) {
            return "Invalid Array!"
      }
      for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] !== 'number') {
                  return "Arry element should be a number"
            }
      }
      // core logic
      let max = numbers[0]
      for (let e = 0; e < numbers.length; e++) {
            if (numbers[e] > max) {
                  max = numbers[e]
            }
      }
      return max
}

// problem-4
function printNumbers(n) {
      if (typeof n !== 'number') {
            return "Invalid Number!"
      }
      const arr = []
      for (let i = 0; i <= n; i++) {
            arr.push(i)
      }
      return arr
}


// problem-6
function isElementPresent(arr, name) {
      if (!Array.isArray(arr)) {
            return "Invalid Array!"
      }

      for (let i = 0; i < arr.length; i++) {
            if (arr[i] == name) {
                  return "Element Found"
            }
      }
      return "Element not found!"
}

// problem-7
function sumArray(numbers) {
      if (!Array.isArray(numbers)) {
            return "Invalid arry!"
      }
      for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] !== "number") {
                  return "Invaid arry element!"
            }
      }

      let total = 0
      for (let j = 0; j < numbers.length; j++) {
            total = total + numbers[j]
      }
      return total
}


function fibonacci(n) {
      if (typeof n !== "number") {
            return "Invalid number"
      }
      let a = 0, b = 1;
      let fibo = [a, b]
      for (let i = 2; i < n; i++) {
            let next = a + b
            fibo.push(next)
            a = b
            b = next
      }
      return fibo
}
console.log(fibonacci(7))


