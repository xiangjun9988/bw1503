//常量
// es6
const MAX_NUM = 1000;
      // MAX_NUM = 2000;
console.log(MAX_NUM);

// es5
var obj = {
  MAX_NUM: 100,
  MIN_NUM:10,
  bg:{
    color: 'red'
  }
}
//对象冻结
// Object.freeze(obj);
obj.MAX_NUM = 2000;
obj.bg.color = "blue";
obj.bg = {};

console.log(obj.MAX_NUM);
// console.log(obj.bg.color);
console.log(obj.bg);

//es3.01

// function Singleton(){
//   var result;
//   function createObj(){

//   }
//   return createObj;
// }