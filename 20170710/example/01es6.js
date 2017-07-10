//定义一个类
class Star{
	//定义属性
	constructor(name){
		this.name = name;
	}
	//定义方法
	getName(){
		return this.name;
	}
	//定义静态方法
	static getGirlFriend(){
		return 'no';
	}

}

var cl = new Star("成龙");
console.log(cl.getName());
console.log(Star.getGirlFriend())