const accountId = 144553;
let accountEmail = "admin@gmail.com";
var accountPassword = "12345"; // prefer not to use var because of issue in block scope and functional scope.
accountCity = "Mohali";
let accountState ;

// accountId = 2; // not allowed
accountEmail = "user@gmail.com";
accountPassword = "6789";
accountCity = "Chandigarh";

// console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])
