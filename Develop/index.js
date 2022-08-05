// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./generateMarkdown')


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

//ADD IN THE OBJECT WITH INQUIRER QUESTIONS AND MAYBE HAEV TO PUT IN THE ARRAY ABOVE AS ARGUEMENTS FOR THE QUESTIONS? ALSO ADD IN THE DEFAULT REPONSES FOR  COUPLE QUESTIONS ---- REFER TO NAV VIDEO

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
    name: "project-name"
}, {
    type: "input", 
    message: questions[3],
    name: "project-description"
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
    name: "using-repo"
}, {
    type: "input",
    message: questions[8],
    name: "contributing-repo"
}

])
.then((answers) => {
    console.log(answers)
})



// TODO: Create a function to write README file
// WILL JUST BE A REGULAR CREATEFILE WITH THE FS MODULE AND LINKING THE MARKDOWNGENERATE FUNCTION
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
