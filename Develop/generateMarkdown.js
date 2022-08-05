// import the data answers to this page from index and then it is used throughout the functions here to then add it in the readme template 
const data = require('./index');
const license = data.license
console.log(license)



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//WILL JUST BE TEMPLATE INFO, DO IT IN PROPER README FILE AND GET IT LOOKING GOOD
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![Github license](INPUT THE LINK FOR IMAGE FOR LICENSE HERE THROUGH THOSE FUNCTIONS)
  
  ## Description
  ADD IN THE DESCIRPTION TEMPLATE HERE
  
  ## Table of Contents
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  ```
  ADD THE INETALL NECESSARY DEPENCIES TEMPLATE IN CODE BLOCK HERE
  ```
  
  ## Usage
  INPUT THE TEMPATE FOR USAGE HERE
  
  ## License
  This project is licensed under the INPUT TEMPLATE NAME HERE license.
  
  ## Contributing
  INPUT THE CONTRIUTING TEMPLATE RIGHTH ERE
  
  ## Tests
  ```
  INPUT THE TESTS TEMPLATE HERE
  ```
  
  ## Questions
  If you have any questions about the repo, open an issue or email me directly from my email: ADD IN EMAIL TEMPLATE HERE. Check out some of my other work at my GitHub: ADD IN GITHUB LINK TEMPLATE HERE.
`;
}

module.exports = generateMarkdown;
