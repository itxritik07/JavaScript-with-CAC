// const tinderUser = new Object(); // Singleton object 
const tinderUser = {}; // Non-Singleton object 

tinderUser.id = "123abc";
tinderUser.name = "Ram";
tinderUser.idLoggedIn = false;
// console.log(tinderUser);


const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Leo",
            lastname: "Das"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname); // open nesting through accessing values from . notation



const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4); // optional {} for guaranteed result. (target, source) - least usage.
const obj3 = { ...obj1, ...obj2, ...obj4 } // mostly we use spread operator.
// console.log(obj3);


// very important
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // least usage.

// console.log(tinderUser.hasOwnProperty('email'));




const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Mr Nobody"
}
// course.courseInstructor

// const {courseInstructor} = course;
const { courseInstructor: instructor } = course; // de-structring object

// console.log(courseInstructor);
console.log(instructor);


// example for React we use de-structuring:
// const navbar = ({instructor}) => {
// }
// navbar(company = "Mr Nobody")



// API small intro: we get API in form of objects or array inside objects like this -
// {
//     sdfasfasdfas
//     asdfasdfasdfa
//     asdfasdfadsf
// }

// [
//     {},
//     {},
//     {}
// ]
