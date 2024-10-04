//... is the rest operator used in generally ecommerece website as we dont know how many items will be added by user

/*function calculateCartPrice(...num1){   
    return num1;
}

console.log(calculateCartPrice(1,2423,2434,24324,24322));  //we can add multiple value
*/

const user ={
    userName: "Abhay",
    price: 2232
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// console.log(handleObject(user));

handleObject({
    userName : "Sam",
    price : 2323
})
