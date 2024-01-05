//switch cases:
//Synatx:--
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 5

switch (month) {
    case 1:
        console.log(`January`);
        break;                      // Here "break" keyword is used and the reason is simple i.e.
                                   // as soon as any case gets matched it'll execute it & than after that case it will not check for any other further cases 
                                  //and will directly execute one by one except "default"
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`April`);
        break;
        
    default:
        console.log(`Oops!`);
        break;
}

