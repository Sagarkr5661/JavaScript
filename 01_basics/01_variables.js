const accountId  = 12221335
let accountEmail = "sagarre5661@gmail.com"
var accountPassword = "12345"
accountCity = "Gurgaon "    // variable can be used like this also

let accountState;   // It will be undefined because we have not assigned any value to it yet
// accountId = 12112



accountEmail = "sadsaf.com"
accountPassword = "sdfdsf"
accountCity = "Delhi"


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
