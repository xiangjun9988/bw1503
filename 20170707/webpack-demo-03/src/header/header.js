// document.write("<header>我是头部,口号：重复事情简单做</header>");
//暴露接口
module.exports = function(){
	require("./header.less");
	// var googleURL = require("./google.png");
	var oDom = document.createElement("header");
	oDom.className = "hd";
	var html = '<p class="slogon">webpack是一个工程化工具，核心思想一切皆模块，按需加载</p>'
	    // html += '<img class="logo" src="'+googleURL+'" alt="" />';
	oDom.innerHTML = html;
	return oDom;
}

// module.exports = {
// 	title:"webpack",
// 	content:"webpack是一个工程化工具，核心思想一切皆模块，按需加载"
// }

// module.exports = "webpack是一个工程化工具，核心思想一切皆模块，按需加载";