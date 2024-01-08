//forEach loop in arrays
const coding = ["js","ruby","java","python","cpp"];

coding.forEach( function (item) {     //callBack function without name
    // console.log(item);
} )

//via arrow function
coding.forEach( (val) => {              //callBack function without function keyword or name
    // console.log(val);
} )

//Q. Can we use any other function which is declared outside the forEach scope ?
//A. Yes. Lets see!

function printMe(i){
    // console.log(i);~
}
coding.forEach(printMe)   //************** */ Most Important Part For Interview********* //
//Here we aren't executing the call back function like this printMe().
//We are just passsing the reference of printMe function


//call back function can have multiple parameters
coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);   //can access anything 
} )


// [ {} , {} , {} ]      
//Array of Objects using forEach loop

const myCoding = [
    {
        langaugeName: "JAVASCRIPT",
        languageExtensionName: ".js"
    },
    {
        langaugeName: "JAVA",
        languageExtensionName: ".java"
    },
    {
        langaugeName: "PYTHON",
        languageExtensionName: ".py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.langaugeName);
} )