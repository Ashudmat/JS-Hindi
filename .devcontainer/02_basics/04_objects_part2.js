const tinderUser = new Object()   //Singleton object
// const tinderUser  = {}              // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com" ,
    fullname: {
        userfullname:{
                firstname: "Ashutosh",    //nesting of objects as much as want
                lastname:"Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);     // can access via this way

/*Merging two objects via Object's assign method*/
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj  = {5:"e",6:"f"}

const obj3 = {obj1, obj2}     // not the best approach
// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2,obj)   // empty object is passed as target and rest as source
// console.log(obj4);
 
const finalobj = {...obj1,...obj2,...obj}     //best approach via spread 
// console.log(finalobj)



/*Array of objects*/
const usersArray = [
    {
        id:"01",
        email:"user1@rediffmail.com",
        status:"inactive"
    },
    {
        id:"02",
        email:"user2@rediffmail.com",
        status:"active"
    },
    {
        id:"03",
        email:"user3@rediffmail.com",
        status:"active"
    },
    {
        id:"04",
        email:"user4@rediffmail.com",
        status:"Dilemma!"
    }
]
const temp = usersArray[0].email
// console.log(temp);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));     //specifying object name is mandatory because it doesn't know which object

// console.log(Object.values(regularUser));   // 

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

/*De-structuring of objects*/
const course = {
    coursename:"JS-Hindi",
    price:"1099",
    courseInstructor:"Ashutosh"
}
const op = course.courseInstructor   //traditional way which is also correct
console.log(op);


const {courseInstructor: teacher} = course       // de structuring of object course
console.log(teacher);

/*APIs*/

// /*JSON Api*/        Java script Object Notation
// {
//     name:"Ashu",
//     id:"007",
//     price:"779"
// }

/*Api*/
[
    {},
    {},
    {}
]