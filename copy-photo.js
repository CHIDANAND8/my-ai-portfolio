import fs from 'fs';
import path from 'path';

const sourcePath = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\34a1df8d-f20f-4caa-a580-88e965b37914\\.user_uploaded\\media_1790318695432.jpg';
const destPath = path.resolve('src/assets/profile-photo.jpg');

try {
  const uploadDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\34a1df8d-f20f-4caa-a580-88e965b37914\\.user_uploaded';
  let targetFile = sourcePath;
  if (fs.existsSync(uploadDir)) {
    const files = fs.readdirSync(uploadDir).filter(f => f.startsWith('media_'));
    if (files.length > 0) {
      files.sort();
      targetFile = path.join(uploadDir, files[files.length - 1]);
    }
  }

  console.log('Copying photo from:', targetFile);
  fs.copyFileSync(targetFile, destPath);
  console.log('Successfully copied the photo to src/assets/profile-photo.jpg!');
  console.log('Your website should now update automatically.');
} catch (error) {
  console.error('Failed to copy the file:', error);
}
