// hajira boi
const students = ["Abul", 'babul', 'kamal', 'jamal', 'babul']

// babul

// basic system
// for (let i = 0; i < students.length; i++) {
//       if (students[i] == "dfdkj") {
//             return console.log("This student founded!")
//       }
//       else {
//             console.log("not found")
//       }
// }

// fiter methode

// const result = students.filter((st) => st == "babul")
const result = students.find((st) => st == "babul")
console.log(result)