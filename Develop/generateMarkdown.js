
// Function that creates the license badge for the README file
function renderLicenseBadge(license) {
  if(license === "None") {
    return "No License";
  } else if(license === "MIT") {
    return `![license: MIT](https://img.shields.io/badge/license-MIT-red)`;
  } else if(license === "Apache 2.0") {
    return `![license: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)`;
  } else if(license === "GPL 3.0") {
    return `![license: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-blue)`;
  } else if(license === "BSD 3") {
    return `![license: BSD 3](https://img.shields.io/badge/license-BSD%203-orange)`;
  }
};

// Function that creates a link to the license
function renderLicenseLink(license) {
  if(license === "None") {
    return "no licenses";
  } else if(license === "MIT") {
    return `[license: MIT](https://opensource.org/licenses/MIT)`;
  } else if(license === "Apache 2.0") {
    return `[license: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if(license === "GPL 3.0") {
    return `[license: GPL 3.0](https://opensource.org/licenses/GPL-3.0)`;
  } else if(license === "BSD 3") {
    return `[license: BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
  }
};

// Function that creates a markdown template for the README file
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
  This project is licensed under ${renderLicenseLink(data.license)}.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  \`\`\`\`
  ${data.tests}
  \`\`\`\`
  
  ## Questions
  If you have any questions about the repo, open an issue or email me directly from my email: [${data.email}](${data.email}). Check out some of my other work at my GitHub: [${data.github}](https://github.com/${data.github}).
`;
}

// Exporting the markdown template to exports
module.exports = generateMarkdown;