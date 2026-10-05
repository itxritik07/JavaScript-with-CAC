const accountId = 144553; // const can not be change, accoundId is a memory keyword, 144553 value assigned to accountId
// accountId = 2; // not allowed


let accountEmail = "admin@gmail.com"; // replacement of var beccause of scope{} concept
accountEmail = "user@gmail.com"; 


var accountPassword = "12345"; // prefer not to use var because of issue in block scope and functional scope
accountPassword = "6789";


accountCity = "Mohali"; // also allocation memory in accountCity and can be changed but not recommended 
accountCity = "Chandigarh";


// console.table([accountEmail, accountPassword, accountCity]);


let accountState ; // declaring variable without assingning a value returns undefined
// console.log(accountState)
