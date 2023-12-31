const marvel_heroes = ["Spiderman","Batman","Ironman"]
const dc_heroes = ["Flash","Kira","Muggles"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);   // push operation works directly on existing array

const allHeros = marvel_heroes.concat (dc_heroes)
// console.log(allHeros);   // concat operation returns a new array


const all_new_heroes = [...marvel_heroes,...dc_heroes] // spread operation ... does the same thing as concat
// console.log(all_new_heroes);                           // preferred 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); 

// console.log(Array.isArray("Ashutosh"))   ////// to check if it is array or not
// console.log(Array.from("Ashutosh"))      ////// to make it into an array
// console.log(Array.from({name: "Ashutosh"}));   ///// Interesting case for interviews

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));      ///// same as from 