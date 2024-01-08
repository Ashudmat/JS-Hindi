//for-in loop inside the objects
const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
//    console.log(key);
}
for (const key in myObject) {
//    console.log(myObject[key]);
}
for (const key in myObject) {
//    console.log(`${key} is the shorcut key for ${myObject[key]}`);
}


//for - in loop in arrays
const programming = ['js','ruby','java','cpp','py']

for (const key in programming) {
    // console.log(key);    //returns keys i.e. 0 1 2 3 4 //drawback
}
for (const key in programming) {
    // console.log(programming[key]);
}

//Q. Can we use foi-in loop in Maps?
//A. No. Because maps aren't iterable

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('FR', "FRANCE")

for (const key in map) {
    console.log(key);    // no output // same reason // Because maps aren't iterable
}