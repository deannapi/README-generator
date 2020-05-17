# README.md Generator with Node.js 👋
    
  ## Badges
  ![GitHub followers](https://img.shields.io/github/followers/deannapi?style=social)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/deannapi/README-generator)
  ![GitHub issues](https://img.shields.io/github/issues/deannapi/README-generator)
  ![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
  

  ## Description
    🔍 Using node.js, this application accepts user input from inquirer to create a professional README.md file for the repository.

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
  * [Description](#description)
  * [Demo](#demo)
  * [Instructions](#instructions)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
    
  ## Installation
    npm init, npm install inquirer

  ## Usage
    Run the following command at the root of your project and then answer the prompted questions: node index.js

  ## Test
    npm test

  ## Credits
  [GitHub: deannapi](https://github.com/deannapi)

  ## License
    This application is MIT licensed.
