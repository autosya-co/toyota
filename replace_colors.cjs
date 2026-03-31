const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(srcDir, function(filePath) {
    if (filePath.endsWith('.astro')) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Reemplazar todas las clases de Tailwind de 'blue' a 'red'
        // Esto captura text-blue-500, bg-blue-100, ring-blue-600 etc.
        let newContent = content.replace(/([a-z:]*)-blue-(\d{2,3})/g, '$1-red-$2');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Color actualizado en: ' + filePath);
        }
    }
});
