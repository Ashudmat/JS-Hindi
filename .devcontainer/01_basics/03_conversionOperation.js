let age = 33
//console.log(typeof age);
//console.log(typeof (age));



let score="33"
//console.log(typeof score);
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);



let strscore="33abc"
let valueInNumbers = Number(strscore)
//console.log(typeof valueInNumbers);
//console.log(valueInNumbers);



let temp = null
let valueInNumberrss = Number(temp)
//console.log(typeof valueInNumberrss)
//console.log(valueInNumberrss); 



let temporary = undefined
let value = Number(temporary)
//console.log(typeof value)
//console.log(value); 



let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);



let empty = ""
let EmptyLoggedIn = Boolean(empty)
console.log(typeof EmptyLoggedIn);
console.log(EmptyLoggedIn);



let notempty = "Ashu"
let NotEmptyLoggedIn = String(notempty)
console.log(typeof NotEmptyLoggedIn);
console.log(NotEmptyLoggedIn);

/************************************OPERATION**************************************************************/


let val = 3
let negVal = -val
console.log(negVal);

/*
console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2%2);
console.log(2*2);
console.log(2**2);
*/

let str = "Hello!"
let name = " Ashutosh"
let finalstr = str+name
console.log(finalstr);

console.log("1"+2);
console.log(1+"2");
console.log(1+1+"2"); // if string is encountered after some operations but not initiallly then firstly operations will be solved 
                     //and then string will be appended.
console.log("1"+"1"+2); // if it encounters string in the starting of operations 
                       // then whole thing will be considered as string and simply appended.


