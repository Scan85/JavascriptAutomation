// Create the WebdriverIO browser object
let browser = {};

// Make a proxy of the global Jest expect function so we can test the global
// Chai version
global._expect = global.expect;
