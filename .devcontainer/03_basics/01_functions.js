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
// console.log(loginUserNotification("Ashutosh"))
// console.log(loginUserNotification(""))
// console.log(loginUserNotification())
 


function loginUser(username = "sam"){       //if did like this way then in worst case username's value will be sam
    
    return `${username} just logged in successfully`
}
// console.log(loginUser())
// console.log(loginUser("ashu"))   //if passed in arguments then its value will be overridden from sam to ashu


function calculateCartPrice(num1){    
    return num1
}
// console.log(calculateCartPrice(69));

/*What if parameters are dynamic*/
function calculateCartPriceUnfixedArg(...num1){    //rest operator //since we don't know how many items will be there in cart
    return num1                                    //now we can give as many arguments as required
}
// console.log(calculateCartPriceUnfixedArg(200,400,500));

/*Some developers use this as well */
function calculateCartPriceWithVal(val1,val2,...num1){ //val1=200 //val2=400 // num1=[500,2000]
    return num1                                    
}
// console.log(calculateCartPriceWithVal(200,400,500,2000));


/*Handling Objects via functions*/
const myobject = {
    username:"elonmuskfragrance",
    id:"1001",
    price:"799"
}

function handleObjects(anyobject){
    // console.log(`Hi! my username is: ${anyobject.username} and i have been given an id:${anyobject.id} my price:${anyobject.price}`);
}

handleObjects(myobject)

// Or rather than creating objects we can do it like this way as well
handleObjects({
    username:"sam",
    id:"2000",
    price:"199"
})

/*Handling Arrays via funtions*/
const myCurrentArray = [199,299,399,499,599]

function returnSecondValue(anyarray){
    return anyarray[1]
}
console.log(returnSecondValue(myCurrentArray));

//Or rather than creating arrays we can do it like this way as well
console.log(returnSecondValue([100,200,300,400]));