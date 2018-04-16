module.exports = [{
	module: {
		rules: [{
			test: /\.scss$/,
			loaders: [{
				loader: 'file-loader',
				options: {
					name: '[name].css',
				},

			}, {
				loader: 'extract-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'sass-loader',
				options: {
					includePaths: ['./node_modules']
				}
			}]
		}, {
			test: /\.js$/,
			loaders: [{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}]
		}]
	}
}];
