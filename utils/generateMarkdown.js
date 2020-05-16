// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## About
    * ${data.about}

  ## Licenses
    * ${data.license}
`;
}

module.exports = generateMarkdown;
