//map() method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map( (num) => num + 10 )       //It can return value

// console.log(newNumbers);

//Chaining

const newNums = myNumbers
                //whatever we get from the execution of first map() , the result is passed in next map()
                .map( (num)=> num * 10 )   //10,20,30,40,50,60,70,80,90,100
                .map( (num) =>  num + 1)   //11,21,31,41,51,61,71,81,91,101
                .filter( (num) => num >= 40 )

console.log(newNums);