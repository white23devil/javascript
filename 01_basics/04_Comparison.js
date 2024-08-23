/*console.log(4<3)
console.log(4>3)
console.log(2==1)
console.log(2!=1)
console.log(2>=1)

console.log("2" >1)   // wrong practice , should follow the same data type while comparison
console.log("02" > 1)*/

//NOTE: Javascript make different method for comapring the variable, the reason behind is that an equality check == and comparison >< >= <= work differently. Eg Comparison covert NULL to a number , treating it as 0, thats why null >= 0 is true and null >0 is false 

// console.log(null >0)
// console.log(null == 0)
// console.log(null>=0)

//=== strictly check , it not only check the data the values but also check the data types
console.log("2" === 2)