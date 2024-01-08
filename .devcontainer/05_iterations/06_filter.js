const coding = ["js","ruby","java","python","cpp"]

coding.forEach( (item)=> {
    // console.log(item);
} )

//Q. What if we try to put the returned value of forEach loop in a variable?
//A. lET'S SEE
const values = coding.forEach( (item)=> {
    // console.log(item);
} )
// console.log(values); //forEach loop doesn't return any value.Hence, it gives undefined

//Some methods:-
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter() method also takes call-back function
const newNums = myNums.filter( (num)=> {

    return num > 4   // Here in filter() method , we must use return keyword if these brackets{} i.e. basically scope are in picture.

} )
// console.log(newNums);
const newNums2 = myNums.filter( (num)=> num > 4 )  

// console.log(newNums); //We can use this way as well // means if only single condition is there // No need of return


//Rather than doin it with filter() , We can do the same thing using forEach() loop as well.
//LETS" SEE

const newNums3 = []

myNums.forEach( (num) => {
    if ( num > 4) {
        newNums3.push(num)
    }
} )
// console.log(newNums3);

/**lets create a dummy database and use filter() method **/
const allBooks = [
    {
        title:'Book-One ', genre:'Fiction', publishYear:1987, edition:2010
    },
    {
        title:'Book-Two ', genre:'History', publishYear:1975, edition:2010
    },
    {
        title:'Book-Three ', genre:'Horror', publishYear:1967, edition:2010
    },
    {
        title:'Book-Four ', genre:'Sci-fi', publishYear:1999, edition:2010
    },
    {
        title:'Book-Five ', genre:'Fiction', publishYear:2000, edition:2010
    },
    {
        title:'Book-Six ', genre:'History', publishYear:1987, edition:2010
    },
    {
        title:'Book-Seven ', genre:'Horror', publishYear:1987, edition:2010
    },
    {
        title:'Book-Eight ', genre:'Sci-fi', publishYear:2013, edition:2020
    },
    {
        title:'Book-Nine ', genre:'Fiction', publishYear:1947, edition:2010
    },
    {
        title:'Book-Ten ', genre:'History', publishYear:1934, edition:2010
    }
]
//Q. Find all books whose genre is History?
//A....
const userBooks = allBooks.filter( (bk) => bk.genre === 'History' )
// console.log(userBooks);


//Q. Find all books which are published after 2000 ?
//A....
const userBooks2 = allBooks.filter( (bk) => bk.publishYear >= 2000 )
console.log(userBooks2);