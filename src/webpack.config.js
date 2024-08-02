module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'resolve-url-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CompressionPlugin({
			algorithm: 'brotliCompress', // or 'gzip'
			test: /\.(js|css|html|svg|png|jpg|woff2|tff|mp3|wav)$/,
			compressionOptions: { level: 11 },
			filename: '[path][base].gz',
		}),
	],
};
