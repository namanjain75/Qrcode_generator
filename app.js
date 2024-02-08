import inquirer from 'inquirer';
import { url } from 'inspector';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from 'fs';
import { Readline } from 'readline/promises';


// Taking the input form the user;
inquirer
  .prompt([
    /* Pass your questions in here */
    {"message":"Enter your url here : ",
    "name":"URL",}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;

    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//   let name = Readline();
//   console.log(name);



