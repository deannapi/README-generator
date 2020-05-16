const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const writeToFile = util.promisify(fs.writeFile);

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
            name: 'instructions',
            message: 'What are the steps required to install the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions to run the application.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        }
    ]);
};

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data)
//         // if (err) throw new Error(err);
    
// };

// function to initialize program
async function init() {
    try {
        const readmeData = await promptUser();
        const readme = generateMarkdown(readmeData);
        await writeToFile('./README.md', readme);
        console.log('README.md was created successfully!');
    }
    catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
