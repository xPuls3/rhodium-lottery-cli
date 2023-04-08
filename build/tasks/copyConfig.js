const { src, dest } = require("gulp");

const copyConfig = async function () {

    await (async () => {

        const result = src(["./../package*.json"]);
        return result.pipe(dest("./../deploy/"));

    })();

};

module.exports = copyConfig;
