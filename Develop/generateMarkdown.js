
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None") {
    return;
  } else if(license === "MIT") {
    return `![license: MIT](https://img.shields.io/badge/license-MIT-red)`;
  } else if(license === "Apache 2.0") {
    return `![license: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)`;
  } else if(license === "GPL 3.0") {
    return `![license: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-blue)`;
  } else if(license === "BSD 3") {
    return `![license: BSD 3](https://img.shields.io/badge/license-BSD%203-orange)`;
  }
}


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
  ${renderLicenseBadge(data.license)}
  
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