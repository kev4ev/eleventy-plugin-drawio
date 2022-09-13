const fs = require('fs');

function generateAddress(relPath, edit=false){
    let path = `${process.cwd()}/${relPath}`, 
        filename = relPath.split('/').reduceRight((prev, curr) => { // throw away all but rightmost item
            if(!prev) prev = curr; 

            return prev;
        }),
        contents = fs.readFileSync(path, 'utf-8').toString(),
        encoded = encodeURIComponent(contents);

    return `https://viewer.diagrams.net/?${edit ? 'edit=_blank&' : ''}title=${filename}#R${encoded}`
}

module.exports = function(eleventyConfig, pluginConfig){    
    eleventyConfig.addShortcode('drawio', generateAddress);
}