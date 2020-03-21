const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		renderer: path.resolve(__dirname, 'index.tsx')
	},
	// output: {
	//     path: DIST_PATH,
	//     publicPath: "",
	//     chunkFilename: "[name].js",
	//     filename: "[name].js"
	// },
	output: {
		filename: '[name].js',
		// libraryTarget: 'commonjs2',
		path: path.join(__dirname, '../dist')
	},
	// externals: {//引入三方包
	//     "testPlugin": "testPlugin",
	// },
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@components': `${__dirname}/components`,
			'@models': `${__dirname}/models`,
			'@services': `${__dirname}/services`
		}
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'vendors~render',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: {
			name: 'runtime~render'
		}
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			},
			{
				test: /\.tsx$/,
				loader: 'ts-loader'
			},
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				//图片
				test: /\.(png|jpg|gif|svg|ico)$/i, //i不区分大小写
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './static/img/' //图片输出位置
						}
					}
				]
			},
			{
				//字体图标
				test: /\.(eot|woff|woff2|ttf)$/i,
				// include: path.resolve(__dirname, 'node_modules'),
				use: {
					loader: 'url-loader',
					options: {
						limit: 30000,
						outputPath: './static/font/' //图片输出位置
					}
				}
			},
			{
				//数据
				test: [/\.json$/i], //i不区分大小写
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './static/data/' //图片输出位置
						}
					}
				]
			},
			{
				test: /\.less$/,
				// include: path.resolve(__dirname, 'src'),
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							modifyVars: {
								'primary-color': '#5177c7',
								'border-radius-base': '2px'
							},
							javascriptEnabled: true
						}
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									flexbox: 'no-2009'
								})
							]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				// include: path.resolve(__dirname, 'src'),
				use: [
					'style-loader',
					{
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									flexbox: 'no-2009'
								})
							]
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: require.resolve('css-loader')
					}
				]
			}
		]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin()
		// new CleanWebpackPlugin(),
		// new copyWebpackPlugin([
		// 	{
		// 		//复制static到dist
		// 		from: __dirname + '/static', //打包的静态资源目录地址
		// 		to: './static' //打包到dist下面的static
		// 	}
		// ]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'), //模板
			filename: 'index.html',
			inject: false, //允许插件修改哪些内容，包括head与body
			hash: true, //是否添加hash值
			minify: {
				//压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true //删除空白符与换行符
			},
			chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none'
		})
	]
};
