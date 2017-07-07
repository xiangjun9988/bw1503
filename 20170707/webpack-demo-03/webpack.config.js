var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './client.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  //定义各种加载模块
  module:{
		//定义所有的加载器
		loaders:[
			//定义具体每一个成员
			{
        // 定义文件的类型 加载css文件
        test: /\.css$/,
        loader: 'style!css'
      },
      {test: /\.less$/, loader: 'style!css!less'}
		]
	},
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
