const { series } = require('gulp');

const tsTranspile = require("./tasks/typescript");
const copyConfig = require("./tasks/copyConfig");

module.exports.default = series(tsTranspile, copyConfig);
