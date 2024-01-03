// var c = 300
let a =300             //global scope

if (true) {
    let a = 10;       //block scope
    const b = 20;
    // var c = 30;
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);    // no error // var prints 30. That's why var is discouraged


/*********INTERVIEW IMPORTANT********/
// global scope of node (in any run time environment) is different from the global scope of browsers.

/******************************************************************************************************** */

//Nesting of functions

function one (){

    const dataone = "Ashutosh"

    function two (){

        const datatwo = "JavaScript"

        // console.log(dataone);  // no error // child can access parent's data
    }
    // console.log(datatwo);  //error // parent can't access child's data
    two();
}
one();
/******************************************************************************************************************/
//Nesting of if 

if(true){

    const firstif = "Saminder"

    if (firstif === "Saminder") {

        const secondif = " Prasad Gill"

        // console.log(firstif+secondif);
    }
    // console.log(secondif);   //error
}
// console.log(firstif);     //error


/*********************Interesting ways of declaring functions****************************** */

//Way-1
function adding1(num){    //normal way

    return num+1
}
// console.log(adding1(9))

//Way-2
const adding2 = function(num){    //storing functions in variables // variables in js are very powerfull
                                 //one can assign function,json and whatnot in any variables
    return num+2
}
// console.log(adding2(2));

/************************************************************* */
console.log(adding3(9))   // in this way one can use the function even before declaration
function adding3(num){    

    return num+1
}


console.log(adding4(2));       // if we declared it like a variable then we can't use the function before declaration
const adding4 = function(num){    
return num+2
}

/************************************************************* */