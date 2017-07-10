//暴露模块
module.exports = {
	//entry 真实地址
	entry: './src/app.es6',
	output:{
		filename: './dist/bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.es6$/,
				loader: 'babel-loader'
			}
		]
	}
}