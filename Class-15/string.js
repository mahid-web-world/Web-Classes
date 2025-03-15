// hello ---> olleh

function reverseString(st) {
      let reversed = ""
      for (let i = 0; i < st.length; i++) {
            reversed = st[i] + reversed
      }
      return reversed
}
console.log(reverseString("Hello"))

// make on this while loop