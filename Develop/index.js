// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerate = require('./generateMarkdown')


// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project.", "What kind of license should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"];

//ADD IN THE OBJECT WITH INQUIRER QUESTIONS AND MAYBE HAEV TO PUT IN THE ARRAY ABOVE AS ARGUEMENTS FOR THE QUESTIONS? ALSO ADD IN THE DEFAULT REPONSES FOR  COUPLE QUESTIONS ---- REFER TO NAV VIDEO

// TODO: Create a function to write README file
// WILL JUST BE A REGULAR CREATEFILE WITH THE FS MODULE AND LINKING THE MARKDOWNGENERATE FUNCTION
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
