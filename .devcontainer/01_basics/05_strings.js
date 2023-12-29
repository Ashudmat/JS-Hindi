const name = "Ashutosh Sharma"
const repoCount = "10"

// console.log(name + repoCount + "Something");      // Not a good practice


/* String Interpolation */
console.log(`Hello my name is ${name} and I am a MERN Stack Developer having a repo count of ${repoCount}`)



/* Another way to declare a string */
const gameName = new String(`Players Unknown Battleground : India `)

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('B'));

/* substr function */
const newName = gameName.substring(8,28)
//console.log(newName);

/* slice function*/
const anotherName = gameName.slice( 0, 7)
//console.log(anotherName);

/* trim function */
const newOne = "    Ashutosh  Sharma     "
//console.log(newOne);
//console.log(newOne.trim());

/* replace function*/
const url = "http://ashutosh.com/ashutosh%20sharma"
console.log(url.replace('%20' , '-'));

/* includes function*/
console.log(url.includes('sundar'));

console.log(gameName.split(':'));