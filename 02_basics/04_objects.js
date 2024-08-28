//Singleton

// const tinderUser = new Object()   -->yeh ek singleton object hai
const tinderUser ={}    //--> yeh singleton object nhi hai

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "Sam@gmai.com",
    fullname :{
        userfullname:{
            firstname: "Abhivandit",
            lastname: "Sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
//optional chaining
console.log(regularUser.fullname?.userfullname.firstname) //agr na ho

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    5: "a",
    6: "c"
}
const obj4 = {
    3: "a",
    4: "b"
}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2 , obj4 )

const obj3 ={...obj1 ,...obj2 }   //MAx use yhi hoga
console.log(obj3)

const users = [
    {
        id : 1,
        email : "Abhivanditsharma@gmail.com"
    },
    {
        id : 1,
        email : "Abhivanditsharma@gmail.com"
    },
    {
        id : 1,
        email : "Abhivanditsharma@gmail.com"
    },
    {
        id : 1,
        email : "Abhivanditsharma@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))