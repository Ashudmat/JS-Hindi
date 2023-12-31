// singleton
Object.create // via Constructor i.e. singleton



/*if ariables are declared like literals then singleton is not made */
/*if made by a constructor then only singleton is made*/



//Object Literals:

const mySymbol = Symbol("key")

const JsUser = {
   //key: //value
   name:"Ashutosh",
   "Full Name":"Ashutosh Sharma",      // can not be fetched via . notation
   mySymbol:"Cat is an animal",        // can do it and get the same output but data-type is now converted into string ***Interview ***
   [mySymbol]:"Cat is an animal",      // right way to declare symbols is inside square braces
   age:  18,
   location:"Jaipur",
   email:"ashutosh123@gmail.com",
   isLoggedIn: false,
   lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.name); 
// console.log(JsUser["email"]);       ****important******
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "ashutoshnow@chatgpt.com"
//Object.freeze(JsUser)    //After freeze no chamges will be made in object. It gets freezed!
JsUser.email = "ashutoshforver@yahoo.com"
// console.log(JsUser);

//Method
JsUser.greeting = function(){
    console.log("Hi! Greetings Ashutosh");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ! ${this.name}`);    /// this operator is used bcz we want to reference something inside object
}
// console.log(JsUser.greeting);   ///// [Function (anonymous)]

console.log(JsUser.greeting()); //// msg + undefined

console.log(JsUser.greetingTwo());