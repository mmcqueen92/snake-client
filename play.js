const net = require("net");
const connect = require("./client.js")
const {setupInput} = require("./input.js")

setupInput(connect());
console.log("Connecting ...");
