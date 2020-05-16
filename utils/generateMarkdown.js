// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## Badges
    ${data.badges}

  ## Description
    * ${data.about}

  ## Table of Contents
    * [Description](#description)
    * [Demo](#demo)
    * [Instructions](#instructions)
    * [Usage](#usage)
    * [Test](#test)
    * [Credits](#credits)
    * [License](#license)
    
  ## Installation
    ${data.instructions}

  ## Usage
    ${data.usage}

  ## Test
    ${data.tests}

  ## Credits
    ${data.credits}

  ## License
    * ${data.license}
`;
}

module.exports = generateMarkdown;
