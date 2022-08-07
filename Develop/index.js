// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?", 
    "What is your email address?", 
    "What is your project's name?", 
    "Please write a short description of your project.", 
    "What kind of license should your project have?", 
    "What command should be run to install dependencies?", 
    "What command should be run to run tests?", 
    "What does the user need to know about using the repo?", 
    "What does the user need to know about contributing to the repo?"];


inquirer.prompt([{
    type: "input",
    message: questions[0],
    name: "github"
}, {
    type: "input",
    message: questions[1],
    name: "email"
}, {
    type: "input",
    message: questions[2],
    name: "title"
}, {
    type: "input", 
    message: questions[3],
    name: "description"
}, {
    type: "list", 
    message: questions[4],
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
}, {
    type: "input",
    message: questions[5],
    name: "dependencies",
    default: "npm i"
}, {
    type: "input",
    message: questions[6],
    name: "tests",
    default: "npm test"
}, {
    type: "input",
    message: questions[7],
    name: "usage"
}, {
    type: "input",
    message: questions[8],
    name: "contributing"
}])
.then(data => {
    var data = data;
    module.exports = {data}
    // console.log(module)
})



    // console.log(module.exports)

// export the license to the generatemarkdown file to then be used in the functions



// TODO: Create a function to write README file
// WILL JUST BE A REGULAR CREATEFILE WITH THE FS MODULE AND LINKING THE MARKDOWNGENERATE FUNCTION
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
