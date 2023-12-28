// Primitive Type

// 7 Types:- String , Number , Boolean , null , undefined , Symbol , BigInt

const str = "AShu"

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;

const outsideTemp = null              // typeof null = object

let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456791223488894n

//Reference Type(Non-primitive)

//Arrays , Objects , Functions

const heroes = ["Shaktiman" , "Nagraj" , "Doga"]

let myObj = {
    name:"ashu",
    age:24
}

const myFunction = function(){
    console.log("Hello Function");
}