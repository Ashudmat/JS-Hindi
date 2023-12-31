//Arrays

/*arrays in js can be of mixed data-types as well*/
const arr1 = [1,2,3,4,true, "Ashutosh"]

const arr2 = ["Shaktiman", "Naagraj", "Doba"]

const arr3 = new Array(0,1,2,3,4,5)

// console.log(arr2[0]);

// Array Methods

arr3.push(9);
//console.log(arr3);


arr3.pop();
//console.log(arr3);


arr3.unshift(7)
// console.log(arr3);


arr3.shift()
// console.log(arr3);

// console.log(arr3.includes(2));
// console.log(arr3.indexOf(1));

const newArray = arr3.join()       // It will bind the array and make it into a String
// console.log(arr3);
// console.log( typeof newArray);


// Slice and Splice

console.log("A " , arr3);
const myn1 = arr3.slice(1,3)       // Array doesn't change in slice and it will return you the range of elements
console.log(myn1);
console.log("B" , arr3);


const myn2 = arr3.splice(1,3)     //Array gets changed in splice and it will return the changed array 
console.log(myn2);
console.log("C" , arr3);




