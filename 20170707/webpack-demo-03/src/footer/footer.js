// document.write("<footer>我是footer</footer>");
//暴露接口
module.exports = function(){
	var oFooter = document.createElement("footer");
	oFooter.innerHTML = "这是我们1503班特有的内容";
	return oFooter;
}