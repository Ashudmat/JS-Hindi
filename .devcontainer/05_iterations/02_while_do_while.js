//while loop

// Synatx:
// while (condition) {
    
// }


let index = 0

while (index <= 10) {
    // console.log(`Current value of index is :${index}`);
    index = index + 2
}



//Array using while loop

let myArray = ['flash','batman','superman']

let charge = 0

while (charge < myArray.length) {
    // console.log(`Value at index ${charge} is ${myArray[charge]}`);
    charge = charge + 1
}



//do-while loop

//Syntax:
// do {
    
// } while (condition);

let score1 = 1

do {
    // console.log(`Score 1 is: ${score1}`);
    score1++
} while (score1 <= 10);


//Special - Case
/**Q. What if we intialiased score with 11 rather than 1 **/   

let score2 = 11

do {
    console.log(`Score 2 is: ${score2}`);
    score2++
} while (score2 <= 10);