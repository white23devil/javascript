//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0 ,23)
// let myCreatedDate = new Date(2024, 0 ,23,5,3)
// let myCreatedDate = new Date("2024-11-23")   //jb dd/mm/yyyy ho toh month 1 se start hoga
// let myCreatedDate = new Date("08-25-2024")   //  mm/dd/yyyy

// console.log(myCreatedDate.toLocaleString());    //Month 0 se start hote hai in js

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp)
// // console.log(myCreatedDate.getTime());   //ans in millisecond
// console.log(Math.floor(Date.now()/1000); 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())

newDate.toLocaleDateString('default',{
    weekday: "long",
    
})
