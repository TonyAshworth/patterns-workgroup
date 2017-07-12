module.exports = () => {
	return {
        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            'scripts/**/*.js'
        ],
        tests: [
            'script-tests/*.spec.js'
        ],
        debug: true,
        preprocessors: {
            // NOTE: If you're using Babel 6, you should also add `presets: ['es2015']`.
            // You will also need to
            // npm install babel-core (and require it instead of babel)
            // and
            // npm install babel-preset-es2015
            // See http://babeljs.io/docs/plugins/preset-es2015/
            '**/*.js': file => require('babel').transform(file.content, {sourceMap: true /*, presets: ['es2015']*/})
        },
        setup: function () {
            chai.should();
            expect = chai.expect;
            assert = chai.assert;
        },
	};
};