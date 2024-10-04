//let ,const, var    avoid var

let a = 333

if(true){
    let a = 23;
    const b = 13
    console.log("Inner : ",a);      //block scope
    
}

console.log(a); //global scope