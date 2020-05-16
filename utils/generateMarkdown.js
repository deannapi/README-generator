// function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}
    
  ## Badges
  ![GitHub followers](https://img.shields.io/github/followers/deannapi?style=social)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/deannapi/README-generator)
  ![GitHub issues](https://img.shields.io/github/issues/deannapi/README-generator)
  ![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
  

  ## Description
    ${readmeData.about}

    GIVEN a command-line application that accepts user input
    WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    WHEN I enter my project title
    THEN this is displayed as the title of the README
    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README

  ## Demo
  ![](readme-gen-gif.gif)

  ## Table of Contents
  * [Description](#about)
  * [Demo](#demo)
  * [Instructions](#instructions)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
    
  ## Installation
    ${readmeData.instructions}

  ## Usage
    Run the following command at the root of your project and then answer the prompted questions: ${readmeData.usage}

  ## Test
    ${readmeData.tests}

  ## Credits
  [${readmeData.credits}](https://github.com/${readmeData.credits})

  ## License
    This application is covered by the  ${readmeData.license} license.
`;
}

module.exports = generateMarkdown;
