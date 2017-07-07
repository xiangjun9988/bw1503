//暴露接口
module.exports = function(){
	var oContent = document.createElement("section");
	oContent.innerHTML = "这三天学了git，webpack，开心死了";
	return oContent;
}