// Packages required
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/generateMarkdown');

// Array of questions for user input
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

// Function that prompts the user with questions to make the README file
const userPrompt = () => {
    return inquirer.prompt([{
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
    .then((data) => {
        writeFile("README.md", data);
    })
};

// Function that takes in the file name and data from the questions and puts them into the generateMarkdown file from other module and creates a README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log(err) : console.log("Created README.md successfully!")
    );
};

// Initialization function
function init() {
    userPrompt();
}

// Call to initialize app
init();
