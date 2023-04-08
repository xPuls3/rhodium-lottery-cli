const { src, dest } = require("gulp");
const del = require("del")
const ts = require("gulp-typescript");
const fs = require("fs");

const tsConfigRaw = fs.readFileSync("../tsconfig.json", "utf8");
const tsConfig = JSON.parse(tsConfigRaw).compilerOptions;

tsConfig.removeComments = true;
tsConfig.declaration = false;

const tsTranspile = async function () {

    try {

        del.sync("./../../deploy/*/**", { force: true });

        const result = src("./../src/**/*.ts").pipe(ts(tsConfig).on('error', errorHandler));
        return result.pipe(dest("./../deploy/dist/"));

    } catch (e) {
        errorHandler(e)
    }

};

function errorHandler(error) {
    console.log(error.toString());
}

module.exports = tsTranspile;
