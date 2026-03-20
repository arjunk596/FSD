// Import required packages
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Ask user for URL
inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log("Your URL is:", url);
    
    // Generate QR code image
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    
    // Save URL to text file
    fs.writeFile('url.txt', url, (err) => {
      if (err) throw err;
      console.log('File has been saved !');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("❌ Couldn't render in this environment");
    } else {
      console.log("❌ Something went wrong:", error);
    }
  });