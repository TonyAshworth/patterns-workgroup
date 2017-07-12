module.exports = function(wallaby) {
    return {
        env: {
            type: 'node',
            runner: 'node',
        },
        files: [
            'scripts/**/*.js',
            '!scripts/**/*.spec.js',
        ],
        tests: [
            'scripts/**/*.spec.js',
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },
        debug: true,
        testFramework: 'mocha',
        setup: function() {
            global.expect = require('chai').expect;
        },
    };
};
