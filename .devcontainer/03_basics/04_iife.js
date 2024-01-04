// Immediately Invoked Function Expression

//normal way of calling functions
function chai(){
    console.log(`DB Connected normally!`);
}
chai();



//IIFE  // Named IIFE
(function chaicode (){
    console.log(`DB Connected via iife!`);
})();                      //wrap the function inside () and call it with ()


// Syntax:-
// ()();
/**********************Interview Important************************/
// why do we need IIFE?
// In order to avoid data pollution of local variables because of global scope.
// iife functions always needs to be ended via semicolon;


//Arrow function and IIFE //Un-named IIFE
( () => {
    console.log(`Db connected via arrow function and IIFE!`);
} )();


//Arrow function with arguments and IIFE
((name) => {
    console.log(`Hi! ${name} DB Connected successfully`);
})('Ashutosh')