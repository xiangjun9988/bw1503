var path = require("path");
// console.log(path);
// console.log("what is __dirname:",__dirname);

var htmlPlugin = require("html-webpack-plugin");

//暴露接口
module.exports = {
	//真实文件地址
	entry: "./src/app.js",
	//发布地址
	output:{
		// path:'/dist/',
		path:path.resolve(__dirname,'./dist/'),
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test:/\.(jpg|png|gif)$/,
				loader:'url-loader?limit=1024'
			}
		]
	},
	//插件
	plugins:[
		new htmlPlugin()
	]
}