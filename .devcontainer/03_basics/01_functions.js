function addTwoNumbers1(num1,num2){  //parameters

    console.log(num1+num2); 
}

// addTwoNumbers1      // reference
// addTwoNumbers1(90,90)  //execution call via arguments
// addTwoNumbers1(7,"9")  // will consider 7 as string 


function addTwoNumbers2(num1,num2){   

    // console.log(num1+num2);//since function is not returning anything but printing something in console therefore o/p is undefined 
    // return num1+num2
    
}
const output2 = addTwoNumbers2(0,9)
// console.log("Output:",output2);


function addTwoNumbers3(num1,num2){   

    // let result = num1+num2

    // return result
    
    return num1+num2
    
}
const output3 = addTwoNumbers3(9,9)
// console.log("Output:",output3);

function loginUserNotification(username){
    if(username === undefined){
        console.log("Invalid Username");
        return
    }
    return `${username} just logged in successfully`
}
console.log(loginUserNotification("Ashutosh"))
console.log(loginUserNotification(""))
console.log(loginUserNotification())
 


function loginUser(username = "sam"){       //if did like this way then in worst case username's value will be sam
    
    return `${username} just logged in successfully`
}
console.log(loginUser())
// console.log(loginUser("ashu"))   //if passed in arguments then its value will be overridden from sam to ashu