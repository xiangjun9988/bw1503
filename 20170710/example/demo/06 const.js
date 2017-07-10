//块级作用域
// if(false){
//  const SLOGON = "Things repeast";
// }
// console.log(SLOGON);

// const SLOGON = "Things repeast";
// const SLOGON = "Things repeast";

// console.log(SLOGON);
// const SLOGON = "Things repeast";

function Person(){}
var p = new Person();
 const SLOGON = Person;
 console.log(SLOGON);