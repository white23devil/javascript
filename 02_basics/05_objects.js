//API
const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "Abhivandit"
}

// console.log(course.coursename)

const {courseInstructor} = course  // destructuring

console.log(courseInstructor);

//or

const{courseInstructor: instructor} = course;
console.log(instructor);


//CURLY BRACKETS KA MTLB HI DESTRUCTORING HAI



//What is API's?
// Sidhi baat : Jb bhi apko apna kaam kisi aur ke ser pr dalna ho

//JSON
// simple keys and values both are in string

// {
//     "name" : "Abhay",
//     "id" : 1234321
//     "coursename" : "Js in hindi",
//     "price" : "free"
// }

//Some time API can be also in array

[
    {},
    {},
    {}
]
