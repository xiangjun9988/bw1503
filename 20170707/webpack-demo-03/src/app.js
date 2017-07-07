// require("./style.css");
require("./style.less");
var oBody = document.body;
//引入头部模块
var oHeader = require("./header/header");
// console.log(oHeader);
    oBody.appendChild(oHeader());

var oContentFn = require("./content/content");
var oDOM = oContentFn();
    oBody.appendChild(oDOM);

var oFooterDOM = require("./footer/footer")();
	oBody.appendChild(oFooterDOM);