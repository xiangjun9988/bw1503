// document.write("<header>我是头部,口号：重复事情简单做</header>");
//暴露接口
module.exports = function(){
	var oDom = document.createElement("header");
	oDom.className = "hd";
	oDom.innerHTML = "webpack是一个工程化工具，核心思想一切皆模块，按需加载";
	return oDom;
}

// module.exports = {
// 	title:"webpack",
// 	content:"webpack是一个工程化工具，核心思想一切皆模块，按需加载"
// }

// module.exports = "webpack是一个工程化工具，核心思想一切皆模块，按需加载";