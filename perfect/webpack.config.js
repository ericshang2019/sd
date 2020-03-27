const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: "bundle.js"
    },
    plugins: [
        new StylelintPlugin({
            files: ['**/*.css']
        })
    ]
}