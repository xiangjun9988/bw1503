//defined a var
//字面量
// var star = {
// 	name:'尼古拉斯-赵四',
// 	setName: function(name){
// 		this.name = name;
// 	},
// 	getName: function(){
// 		return this.name;
// 	}
// }
// star.setName('尼古拉斯-刘能')
// console.log(star.getName());

function Star(name){
	this.name = name;
	// this.getName = function(){
	// 	return this.name;
	// }
}
Star.prototype.getName = function(){
	return this.name;
}
Star.hasGirlFriend = function(){
	return 'no';
}
//prototype解决什么问题，(为什么要定义在prototype)
//共享,只有一个，换种说法：定义在对象中的方法，会有多个



var cl = new Star("成龙");
console.log(cl.getName());

console.log(Star.hasGirlFriend());