// if
const temperature = 43
if (temperature<50) {
    // console.log(`less than 50`);
}
// console.log(`greater than 50`);

/////////////////////Operators///////////////////////////
// <,>,<=,>=,!=,==,===,!==


const score =200
if(score>100){
    let power = "fly"
    // console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);   // here if we used var in if condition then it will give output which is not good.


/**short-hand notation**/

const balance = 1000

// if(balance > 500) console.log("test");   // implicit scope // executes in a single line // semicolon;

/**Nesting**/  //elif

if(balance < 500){
    // console.log(`less than 500`);
}
else if (balance < 750){
    // console.log(`less than 750`);
}
else if(balance < 900){
    // console.log(`less than 900`);
}
else {
    // console.log(`less than 1200`);
}


//&& and || operator in conditions
const InternetBanking = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(InternetBanking && debitCard){
    console.log(`Allowed to buy courses`);
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`User Logged in`);
}
