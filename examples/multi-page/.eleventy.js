const drawio = require('eleventy-plugin-drawio');

module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(drawio);
    return {
        dir: {
            input: 'src', 
            output: 'build'
        },
        htmlTemplateEngine: 'njk'
    }
}