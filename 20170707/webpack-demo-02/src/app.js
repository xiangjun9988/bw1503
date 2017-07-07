require("./style.css");
//引入头部模块
var oHeader = require("./header/header");
// console.log(oHeader);
document.body.appendChild(oHeader());
require("./content/content");
require("./footer/footer");