//探讨作用域
// if(false){
//   var var_height = 200;
// }
// console.log(var_height);



if(true){
  let let_width = 1000;
  var var_width = 2000;
}
console.log(var_width);
// console.log(let_width);

//函数级作用域
function demo(){
  var w = 200;
  let h = 500;

  function innner(){
    console.log(h);
  }
  innner();
}
// console.log(w);
// console.log(h);

//循环存值
// var arr = [];
// for(let i=0; i< 5; i++){
//   arr[i] = function(){
//     console.log(i);
//   }
// }

//执行第3个
// arr[2]();


//声明前置
// console.log(pre_v);
// console.log(pre_l);
var pre_v = 50;
let pre_l = 100;
console.log(pre_l);

//重复定义
var repeat_v = 50;
var repeat_v = 50;

// let repeat_l = 100;
// let repeat_l = 100;
