const { generateAddress } = require('./lib/api');

module.exports = function(eleventyConfig){
    eleventyConfig.addShortcode('drawio', generateAddress);
}