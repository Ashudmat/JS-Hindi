// forof  loop

// [ "" , "" , "" ]        //Array of strings
// [ {} , {} , {} ]       //Array of Objects

//Array of strings
const arr = ["Oggy", "And", "The", "Kock", "Roches"]
for (const index of arr) {
    // console.log(index);
}

//String
const greetings ="Hi User!"
for (const greet of greetings) {
    // console.log(`Character is :${greet}`);
}


//Maps
// Map is a kind of object in which there is a collection of key-value pair and each value is uniquely associated i.e. no duplicacy

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('FR', "FRANCE")
// map.set('IN', "INDIA")  //will not execute

// console.log(map);


// for-of loop inside maps

for (const key of map) {
    // console.log(key);         // returns an array of key and value
}

for (const value of map) {
    // console.log(value);      // returns an array of key and value
}

for (const [key,value] of map) {
    console.log(key,":-",value);
}

//for-of loop inside objects

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'               
}

// for (const [key,value] of myObj) {          //error // object is not iterable
//     console.log(key,":-",value);
// }

