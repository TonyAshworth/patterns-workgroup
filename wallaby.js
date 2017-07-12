'use strict';

const babel = require ('babel');

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'scripts/**/*.js'},
        ],
        tests: [
            {pattern: 'scripts/**/*.spec.js'}
        ],
        compilers: {
            'scripts/**/*.js': wallaby.compilers.babel({
                babel: babel,
            }),
        },
        debug: true
    };
};