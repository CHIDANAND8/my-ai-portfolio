import fs from 'fs';
import path from 'path';

const sourcePath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\210b082c-bed7-4c50-9043-369645d58d24\\media__1781449836400.jpg';
const destPath = 'C:\\Users\\Admin\\OneDrive\\Desktop\\My portfolio\\portfolio-ai\\src\\assets\\profile-photo.jpg';

try {
  // Read all files in the gemini media directory to find the latest
  const dirPath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\210b082c-bed7-4c50-9043-369645d58d24';
  const files = fs.readdirSync(dirPath);
  let latestMedia = null;
  
  if (files.length > 0) {
    const mediaFiles = files.filter(f => f.startsWith('media_'));
    if (mediaFiles.length > 0) {
      // Get the last uploaded one based on time
      mediaFiles.sort();
      latestMedia = path.join(dirPath, mediaFiles[mediaFiles.length - 1]);
    }
  }

  const finalSource = latestMedia || sourcePath;
  console.log('Copying photo from:', finalSource);
  
  fs.copyFileSync(finalSource, destPath);
  console.log('Successfully copied the photo to src/assets/profile-photo.jpg!');
  console.log('Your website should now update automatically.');
} catch (error) {
  console.error('Failed to copy the file:', error);
}
