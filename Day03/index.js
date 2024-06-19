const os = require('os');
const path = require('path');
const {info, debug} = require('./service/logger')

// console.log(os.totalmem());
// console.log(path.parse(__filename));

info("Hello");
debug("World")
