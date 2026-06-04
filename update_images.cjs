const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/pages', (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('onError={')) {
        content = content.replace(/<img /g, `<img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} `);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated images in ${filePath}`);
    }
  }
});
