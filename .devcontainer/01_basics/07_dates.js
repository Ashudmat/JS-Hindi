//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());  // same as default 
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());



let newDate = new Date(2023,0,23)
// console.log(newDate.toDateString());


let anotherDate = new Date(2023,1,14,5,2)
// console.log(anotherDate.toLocaleString());


let firseDate = new Date("2023-01-26")
// console.log(firseDate.toLocaleString());


let dobaraDate = new Date("10-02-2000")
// console.log(dobaraDate.toLocaleString());


/*Time Stamp*/ 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // Time range from 1 Jan 1970 till now in milliseconds //

// console.log(firseDate.getTime()); // Time ramge from 1 Jan 1970 till 26 Jan 2023 in ms// 

// console.log(Date.now()/1000); // to convert ms into seconds // 

// console.log(Math.floor(Date.now()/1000)); //to remove decimal

let naviDate = new Date()
// console.log(naviDate.toLocaleString());
// console.log(naviDate.getMonth()+1);
// console.log(naviDate.getDay());

console.log(naviDate.toLocaleString('default',{
    weekday:"short"
}));
