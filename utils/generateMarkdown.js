// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](${license})](https://opensource.org/licenses/${license})`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/License-${license}-blue.svg`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  const badge = renderLicenseBadge(link, license);
  return `
  ## License
  ${license} License
  ${badge}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `
  
  # ${data.title}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
  ## Description
    ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Table of Contents](#Table of Contents.)
  * [Visuals](#Visuals)
  * [Site](#Site)
  * [Installation](#Installation) 
  * [Usage](#Usage) 
  * [License](#License) 
  * [Credits](#Credits)
  * [Testing](#Testing) 
  * [Questions](#Questions)
  
  ## Visuals

  ## Site

  ## Installation
    ${data.installation}
  ## Usage

    ${data.usage}
  ${license}
  ## Credits

  ${data.credits}

  ## Testing
    ${data.testing}

  ## Questions
    If you have any questions about the project please feel free to contact me.
    Github Username: ${data.github}
    Github profile link: https://github.com/${data.github}
    Email: ${data.email}
      `;
}

module.exports = generateMarkdown;
