
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
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`\`
  ${data.dependencies}
  \`\`\`\`
  
  ## Usage
  ${data.usage}
  
  ## License
  MIGHT NEED TO ADD IN STUFF TO DO WITH THE FUNCTIONS ABOVE ABOUT THE LICENSING AND IF THEY CHOOSE NONE
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  \`\`\`\`
  ${data.tests}
  \`\`\`\`
  
  ## Questions
  If you have any questions about the repo, open an issue or email me directly from my email: [${data.email}](${data.email}). Check out some of my other work at my GitHub: [${data.github}](${data.github}).
`;
}

module.exports = generateMarkdown;
