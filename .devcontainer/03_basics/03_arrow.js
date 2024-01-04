//this keyword in objects
const user = {
    username: "Ashutosh",
    price:"999",
    welcomeMessage: function(){
        console.log(`Hi ${this.username},Welcome to your website`);//this keyword is used whenever we want to refer any variable within the current context
        console.log(this);
    }
}
// user.welcomeMessage()


// /**what if we change the value of username**/
user.username = "Yuvraj"
// user.welcomeMessage()


// console.log(this);    //outside the context i.e. global context // returns {}  //empty object

// However inside the browser , the global object is window object



//this keyword in functions

function chai1(){
    // console.log(this);
}
chai1()


function chai2(){
    let username = "yuhhu"
    // console.log(this.username);       //gives undefined 
}
chai2()


/*******************************************************************************************************************************/
// Arrow functions

const normalFunction = function (){
    console.log("hi, i am a normal function");  // normal function
}
// normalFunction()


const arrowFunction1 = (num1,num2) => { return num1+num2}   // explicit return
// console.log(arrowFunction1(3,4));

const arrowFunction2 = (num1,num2) => (num1+num2)          // implicit return
// console.log(arrowFunction2(3,4));

/*Very important Note*/
// if using an arrow function do not use {} without return keyword
// and if using () then no need to use return keyword


//How to return an object in arrow functions
const arrowFunction3 = () => {username:"ashutosh"}
console.log(arrowFunction3());          // gives undefined


const arrowFunction4 = () => ({username:"ashutosh"})   // after wrapping the object it in () , it can be returned
console.log(arrowFunction4());   
