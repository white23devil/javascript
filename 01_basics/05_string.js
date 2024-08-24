const  name = "Abhivandit"
const repoCount = 50

// console.log(name + repoCount + " Value")  //Not a good practise

//use backtics for for string interpotation (make place holder)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) 

//DECLARE STRING NAME

const fameName = new String('Abhivandit-Sh')
console.log(fameName)
console.log(fameName.length)
console.log(fameName[0]);
console.log(fameName.__proto__)
console.log(fameName.toUpperCase())
console.log(fameName.charAt(2))    //user to find where is our character
console.log(fameName.indexOf('A'));

const newName = fameName.substring(0,4)
console.log(newName)

const anotherString = fameName.slice(-9,1)
console.log(anotherString);

const newString1 = "     abhivandit     "
console.log(newString1);
console.log(newString1.trim())

const url = "https://abhivandit.com/abhivandit%20sharma"
console.log(url.replace('%20' , '-'))

console.log(url.includes('abhivandit'))   //pta krne ke liye ki yeh value hai

console.log(fameName.split('-'))  //split to array

