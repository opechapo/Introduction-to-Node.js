// console.log("Start...")
// const fs = require('fs');

// const { log } = require("console")

// // const content = "My name is so so"

// console.log("fs.readFile() start here...")

// fs.readFile('text.txt', "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// console.log("fs.readFile() stop here...");

// console.log("fs.readFileSync() start here...");

// try {
//   const data = fs.readFileSync("text.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// console.log("fs.readFileSync() end here...");

// const content = "This is the content to be written to the file.";
// fs.writeFile("example.txt", content, "utf8", (error) => {
//   if (error) {
//     console.error("An error occurred while writing to the file:", error);
//     return;
//   }
//   console.log("File has been written successfully.");
// });


// console.log("Operation end...")

// const fs = require('fs').promises;
// const contenti = `"My name is Chapon"`

// async function appendToFile(filePath, content) {
//   try {
//     await fs.appendFile("examply.txt", contenti + '\n', { flag: 'w' });
//     console.log(`Content appended to ${contenti}`);
//   } catch (error) {
//     console.error(`Error appending to file: ${error.message}`);
//   }
// }
// appendToFile()

// console.log("Start...");

// const { log } = require('console');
// const fileSystem = require('fs');

// const content = `This is for writFile().`

// Write file*******************************
// require("fs").writeFile("cla.py", content, (error) => {
//   if(error){
//     console.log(error);
//     return;
//   }
//   console.log("Created successfully");
  
// })

// console.log("Operation ends");

// const fileSystem = require("fs");
// const content = `This is a goat`


// require("fs").readFile("cla.py", 'utf8', (err, data) => {
// if(err) {
//   console.log(err);
// return;
// }
// console.log(data);
// })

// try{

// }catch(error){

// }


// const fs = require("fs").promises

// async function appendToFile(){
//   try{
//     await fs.appendFile("server.js", content + "/n", {flag: "a"})
//     console.log(`appended: ${content}`);
    
//   }catch (error) {
//     console.error(`Error appending to file: ${error.message}`);
    
//   }
// }
// fileSystem.appendFile("clp.txt")
// console.log("operation ends");


console.log("Start...");
const fsPromises = require("fs").promises
const content = `This is a goat`



const appendFile = async (filepath) => {
  try{
    await fsPromises.appendFile(filepath, content + '\n')
    console.log("Apeend done");
    
  }catch (error){
    console.log(error);
    
  }
}
appendFile("clp.txt")
console.log("Operate on me doc");


