const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'What is the project about?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the license for the project:',
            choices: ['Mozilla', 'Apache', 'MIT', 'Boost',]
        },
                {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the steps required to install the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?',
        },
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    });
};

// function to initialize program
function init() {
    promptUser()
        .then(readmeData => {
            const readme = generateMarkdown(readmeData);
            writeToFile('./README.md', readme);
        });
}

// function call to initialize program
init();
