const path = require('path');
const src_dir = path.join(__dirname, './Client/Source');
const dist_dir = path.join(__dirname, '/Client/Dist');

module.exports = {
  entry: [`${src_dir}/index.js`],
  output: {
      filename: 'bundle.js',
      path: dist_dir
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
}

}