const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [{
        type: 'input',
        message: 'What is your github username?',
        name: 'Github',
        default: 'https://github.com/jorgeebn16',
    },
    {
        type: 'input',
        message: 'What is your github email address?',
        name: 'Email',
        default: 'jorgeebn16@gmail.com'
    },
    {
        type: 'input',
        message: 'What is the name of the repository eg. repo-name?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Denote a description for what your project is.',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What are the required files necessary to install for this project?',
        name: 'Installationdetails'
    },
    {
        type: 'input',
        message: 'What is the code utilized to download these files?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Explain how the application can be used.',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'What are the license(s) placed on this project?',
        name: 'License',
        choices: ["MIT", "Apache-2.0", "Creative Commons 1.0", "GPLv3", "WTFPL"],
    },
    {
        type: 'input',
        message: 'What badges did you want to add to this project? (Copy them into the input)',
        name: 'Badges',
        default: '![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)'
    },
    {
        type: 'input',
        message: 'How can someone contribute to this?',
        name: 'Contributing',
        default: 'For anyone who wishes to contribute you can contact me with the information below'
    },
    {
        type: 'input',
        message: 'How do you test this application?',
        name: 'Test',
        default: 'Run the javascript file in node and check for lines in which the function is not currently running. Once this is finished run your code once again to verify if there are any other issues recurring. '
    },
    
];


// function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Congratulations, your README.md file is now ready for your new application!")
    });
}

// function to initialize program
async function init() {
    try {
        inquirer.prompt(questions).then((response) => {
            const responses = generateMarkdown(response);
            writeToFile('README.md', responses);
        });
    } catch (error) {
        console.log(error)
    }
}

// function call to initialize program
init();