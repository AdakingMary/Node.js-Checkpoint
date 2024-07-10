// Require the 'fs' module
import fs from "fs";

// Content to write in the File
const welcomeContent = "Hello Node";

// file path and file Name
const filePath = "./welcome.txt";

// write content to file
fs.writeFile(filePath, welcomeContent, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log(
      `File "${filePath}" has been created with content: "${welcomeContent}"`
    );
  }
});
