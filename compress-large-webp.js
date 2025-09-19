const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function compressLargeWebp(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      compressLargeWebp(fullPath);
    } else if (file.toLowerCase().endsWith('.webp')) {
      const stats = fs.statSync(fullPath);
      if (stats.size > 1024 * 1024) { // 大于1MB
        const output = fullPath; // 覆盖原文件
        sharp(fullPath)
          .webp({ quality: 70 }) // 可调整压缩质量
          .toFile(output + '.tmp', (err, info) => {
            if (!err) {
              fs.renameSync(output + '.tmp', output);
              console.log('Compressed:', output, 'New size:', info.size);
            } else {
              console.error('Error compressing', output, err);
            }
          });
      }
    }
  });
}

compressLargeWebp(path.resolve(__dirname, 'dist'));
