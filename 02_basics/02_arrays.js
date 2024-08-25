const arr1 = ["thor" , "ironman" , "spiderman"]
const arr2 = ["Superman", "flash", "batman"]

// arr1.push(arr2)   //elements 4 

// console.log(arr1)     
// console.log(arr1[3][1])

// const arr3 = arr1.concat(arr2)   //return new array
// console.log(arr3)

const arr4 = [...arr1, ...arr2]   //... represent spread operation
// console.log(arr4)

const arr5 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real = arr5.flat(Infinity)
console.log(real)

console.log(Array.isArray("Abhivandit"))
console.log(Array.from("Abhivandit"))    //yeh array bna dega
console.log(Array.from({name:"Abhivandit"}))    //intreted

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))   //make new arrays