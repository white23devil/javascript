const array = [1,2,3,4,5,6,7]
const myHeros = ["devil" , "naagin"]
const Array1 = new Array(1,2,3,4)
console.log(array[0])

//NOTE: Js array-copy operation create shallow copies
//Shallow Copy: of an object is copy whose properties share the same refrence. (Mtlb ki jo change kro gei voh original mei bhi hoga)
//Deep Copy: of an object dont share the same refrence (Mtlb jo chnge krogei voh original mei reflect nhi hoga)

//Array Method
/*Array1.push(10)  //last mei element add hoga
console.log(Array1)
Array1.pop()    //last se element delete hoda
console.log(Array1)*/

// Array1.unshift(11)
// console.log(Array1)     //[11, 1, 2, 3, 4 ]
// Array1.shift();
// console.log(Array1)    //[1,2,3,4]

// console.log(Array1.includes(9))      //False
// console.log(Array1.indexOf(9))       //-1

// const newArr = myArr.join()  //use to convert array into string

//SLICE SPLICE

console.log("A" , Array1)
const myn1 = Array1.slice(1,3)
console.log(Array1)
console.log("B" , Array1)

const myn2 = Array1.splice(1,3)   //splice directly manipulate the array
console.log(myn2)