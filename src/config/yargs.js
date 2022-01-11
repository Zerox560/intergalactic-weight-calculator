const argv = require("yargs")
    .option("p", {
        alias: "planet",
        desc: "Name of the planet (lowercassed)",
        demandOption: true,
        type: "string",
        default: "earth"
    })
    .option("w", {
        alias: "weight",
        desc: "Your current weight on earth (kg)",
        demandOption: true,
        type: "number",
        default: 70
    })
    .check((argv, options) => {
        if (isNaN(argv.w)) {
            throw "The weight must be a valid number."
        }
        return true;
    })
    .argv;

module.exports = argv;