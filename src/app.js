const argv = require("./config/yargs");
const calculateWeight = require("./helpers/calculateWeight");

console.log(calculateWeight(argv.w, argv.p));
