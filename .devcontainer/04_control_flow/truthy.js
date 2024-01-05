//Truthy Value:
//Assuming true value of anything

const userEmail = "a@ashutosh.powerbi.ai"

if(userEmail){   // Here it was assumed that userEmail is true bcz it holds some string value and control flow went inside if
    // console.log(`New user logged in. Hi ${userEmail}`);
}else{    // But if we pass empty string "" then else part will be executed.
    console.log(`Oops! 404 BAD CODE ERROR`);
}

/**String ke andar kuch hai agar to maan lia gya hai ki wo true hai i.e. truthy**/
/**Or agar string ke andar kuch nahi hai to maan lia gya hai ki wo false hai i.e. falsy**/

//falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', "false", " ", [], {}, function(){}


// How to check whether an Array is Empty?:
 const myArray = []
 if (myArray.length === 0) {
    // console.log(`Empty Array F0und!`);
 }


//How to check whether an Object is Empty?:
const myObj = {}
if (Object.keys(myObj).length === 0) {
    // console.log(`Empty Object F0und`);
}


//Interview Tricky IMportant//

// console.log(false == 0);    // true
// console.log(false == '');  // true
// console.log(0 == '');     // true




/**********************Nullish Coalescing Operator (??): null undefined*******************/
// This operator is basically responsible for null and undefined saftey checks to reduce errors
let val1;
val1 = 5 ?? 10
console.log(val1);

let val2 ;
val2 = null ?? 12
console.log(val2);

let val3;
val3 = undefined ?? 34
console.log(val3);

let val4;
val4 = null ?? 10 ?? 96  //Q. Which value will get assigned?
console.log(val4);      //A. 10


/**Terniary Operator **/
// condition ? true : false

const iceTprice = 100;
iceTprice >= 80 ?console.log(`Less than 80`):console.log(`More than 80`);