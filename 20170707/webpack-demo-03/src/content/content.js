//暴露接口
module.exports = function(){
	require("./content.less");
	var oContent = document.createElement("section");
	oContent.className = "wrap-content"
	oContent.innerHTML = "这三天学了git，webpack，开心死了";
	return oContent;
}