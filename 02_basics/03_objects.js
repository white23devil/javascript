//Singleton


//object literals
 
const mySym = Symbol("key")

const JsUser = {
    name: "Abhivandit",
    "Full Name": "Abhivandit Sharma",  //Chance hi nhi hai ki dot se acces kro
    [mySym]: "mykey1",
    age : 18,
    email: "abhivanditsharma@gmail.com",
    isLoggedIn: false,
    isLoggedInDays : ["Monday" ,"Tuesday"]
}

/*console.log(JsUser.name)   //NOT A GOOD PRACTICE
console.log(JsUser["email"])
console.log(JsUser["Full Name"])  //Automatically yha pr square brackets aaegi
console.log(JsUser["mySym"])
//console.log(JsUser[typeof "mySym"])    //lekin humne toh yha symbol declare kiya tha toh yha glti hai, Toh ek hi trika hai ki mysym ko brackets mei enclosed kro
console.log(JsUser[mySym])  //behind the scene yeh object hai
*/

/*JsUser.email = "abhivanditsharma345@gmail.com"
Object.freeze(JsUser)      //ab joh mrji krlo change nhi hoga
JsUser.email = "abhaysharma@gmail.com"  //yeh value propogate nhi hogi
console.log(JsUser)
*/


// --------------FUNCTION----------------------------------//
JsUser.greeting = function(){
    console.log("heloo Js user")
}
JsUser.greetingTwo = function(){
    console.log(`heloo Js user , ${this.age}`)  //backticks esc ke niche hai
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

//try kro ki square brackets se access kro