const accountId = 144553
let accountEmail = "rdxpt@outlook.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState    // ';' doesnt matter
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121221"
accountCity = "Noida"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])