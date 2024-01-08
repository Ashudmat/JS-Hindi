// for loop
//Syntax:
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//normal for loop
for (let i = 0; i <= 10; i++) {
    const element= i;
    // console.log(element);
}


// conditions inside loop
for (let i = 0; i <= 10; i++) {
    const element= i;

    if (element == 5) {
        // console.log(`5 is best number ig`);
    }
    // console.log(element);
}


//loops inside loop  //nested loops
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop values of i: ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop values of j: ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

//array and loops
let myArray = ['flash','batman','superman']
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

/** Q. In javascript if you try to access arr[5] in an array for size 4. What will happen?**/
//A. undefined . There is no concept like ArrayIndexOutOfBoundException
let myArray2 = ['flash','batman','superman']
for (let i = 0; i <= myArray2.length; i++) {
    const element = myArray2[i];
    // console.log(element);
}

//break and continue keyword

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is: ${i}`);
    
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;    //5 not printed // i.e. one iteration skipped
    }
    console.log(`Value of i is: ${i}`);
    
}