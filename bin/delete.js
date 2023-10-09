const fs= require('fs')
const path= require('path')

const gitDirectory = path.join(__dirname, '../','/.git');
// Check if the .git directory exists
if (fs.existsSync(gitDirectory)) {
  try {
    // Delete the .git directory recursively
    fs.rmdirSync(gitDirectory, { recursive: true });
  } catch (err) {
    console.error('Error deleting .git directory:', err);
  }
} else {
  console.error('.git directory does not exist');
}

function deleteDirectoryRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively delete subdirectories
        deleteDirectoryRecursive(curPath);
      } else {
        // Delete files
        fs.unlinkSync(curPath);
      }
    });
    // Delete the empty directory itself
    fs.rmdirSync(directoryPath);
  } else {
    console.error(`Directory does not exist: ${directoryPath}`);
  }
}
deleteDirectoryRecursive(__dirname);



