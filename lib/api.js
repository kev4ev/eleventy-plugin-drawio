const fs = require('fs');

function generateAddress(relPath, edit=false, page){
    let path = `${process.cwd()}/${relPath}`, 
        filename = relPath.split('/').reduceRight((prev, curr) => { // throw away all but rightmost item
            if(!prev) prev = curr; 

            return prev;
        }),
        contents = fs.readFileSync(path, 'utf-8').toString(),
        encoded = encodeURIComponent(contents);

    let url = `https://viewer.diagrams.net/?${edit ? 'edit=_blank&' : ''}title=${filename}${page ? `&page=${page}` : ''}`;

    return `${url}#R${encoded}`;
}

module.exports = {
    generateAddress
}