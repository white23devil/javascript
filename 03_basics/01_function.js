//Syntax 

/* 
function func_name(){
    //Code
}


func_name()

*/
function name(){
    console.log("Abhivandit");
}

// name();

function add(num1 , num2){
    return(num1+num2);
}

// const result = add(3,2);
// console.log(result)

function userLogIn(username = "User"){  // yaki user kbhi bhi undefined name na pass kre
    if(username == undefined){
        console.log("Please Enter the username");
        return;
    }
    else{
        return `${username} just logged in`   //string manipulation
    }
    
}

// console.log(userLogIn("Abhivandit"));
console.log(userLogIn());
