// CommonJS, every file is module (by default)
// Module - Encapsulated Code (only share minimum)

const names = require("./4-names.js")
const sayHi = require("./5-utils.js")
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")
console.log(data);
sayHi("susan")
sayHi(names.peter)
sayHi(names.john)