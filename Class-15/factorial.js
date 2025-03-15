// 5 factorial
// 5*4*3*2*1

function factorial(num) {
      let result = 1
      for (let i = 1; i <= num; i++) {
            result = result * i
      }
      return result
}

console.log(factorial(5))

// home work for you
// calclute factorial using while loop