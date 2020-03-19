const path = require('path');
const env = process.env.WEBPACK_ENV;

// const JS_SOURCE_FILES = ['./src/polyfills.ts', './src/main.ts'];
const OUTPUT_FILENAME = 'result';
const DEST_FOLDER = 'dist';

const OUTPUT_FILE = `${OUTPUT_FILENAME}.js`;
const OUTPUT_FILE_MIN = `${OUTPUT_FILENAME}.min.js`;

const { outputfile, mode } = env == 'build' 
	? {
		outputfile: OUTPUT_FILE_MIN,
		mode: 'production'
	} 
	: {
		outputfile: OUTPUT_FILE,
		mode: 'development'
	};

module.exports = {
    mode,
	// entry: JS_SOURCE_FILES,
	output: {
		path: path.join(__dirname, DEST_FOLDER),
		filename: outputfile,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			// Only run `.js` files through Babel
			test: /\.m?js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}],
	},
	devtool: 'source-map',
}; 