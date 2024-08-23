//Two tpes of data type we have :-  1)Primitive   2)Non primitive
//Primitive(CALL BY VALUE : jab bhi aap inko khi se khi copy krte ho , toh inka jo original data hai voh refrence apko memory ka nhi milta ,inko copy krke aapko diya jata hai alg aur usme jo bhi aap changes krte ho voh copy mei changes hote hai) : 7 types : String , Number,Boolean , null ,undefined ,Sybmol,BigInt
 
//Is Javascript is static or dynamic in nature?
//   Javascript is dynamically typed because variable types are determined at run time and you dont need to declare the type of variable explicitly Eg: x = 10(x is int) , x = "Hello"(x is string) , x == true(x is Boolean)
//

// Non priitive(Jiska aapko as such memory mei refrence diya jata hai)  
//ARRAY , OBJECTS , FUNCTIONS 

//Symbol
const id = Symbol("123")
const newid = Symbol("123")
console.log(id == newid)   // output is false

const BigINT = 123423543354334n   //eg of big int last mei n jrur lgana


//ARRAYS
const hero = ["shaktiman", "naagraj", "doga"];// he hogya array ab aage objects bnana hai toh uske liye use curly brackets
let myObj={
    Name: "Abhivandit",   // : and , yeh lgana jruri hai
    Age : 20,
}