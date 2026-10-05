const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Mr Nobody"
};

// normally we get values form this way
// console.log(course.courseName);
// console.log(course.price);
// console.log(course.courseInstructor);

const { courseInstructor } = course;  // concept of Object De-structuring, 
// console.log(courseInstructor); // directly access values

const { courseInstructor: instructor } = course; // can set short name
// console.log(instructor);


// example for React we use de-structuring:
// const navbar = ({instructor}) => {
// }
// navbar(company = "Mr Nobody")


// API formats -
// 1. Objects ⇢ Strings
// {
//     name: "spiderman",
//     power: "web shooter",
//     company: marvel
// }

// 2 Arrays ⇢ Objects ⇢ Strings 
// [
//     {},
//     {},
//     {}
// ]
