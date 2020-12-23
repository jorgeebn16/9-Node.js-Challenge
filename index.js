const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [{
        type: 'input',
        message: 'Please provide your github username! (Required)',
        name: 'Github',
        default: 'https://github.com/jorgeebn16',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide your email associated to github! (Required)',
        name: 'Email',
        default: 'jorgeebn16@gmail.com',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email associated to github!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a project title! (Required)',
        name: 'Title',
        validate: tittleInput => {
            if (tittleInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a brief description about the project! (Required)',
        name: 'Description',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a brief description about the project! (Required)');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What are the required files necessary to install for this project! (Required)',
        name: 'Installationdetails',
        validate: instInput => {
            if (instInput) {
                return true;
            } else {
                console.log('What are the required files necessary to install for this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'There is a code utilized to download these files? (Required)',
        name: 'Installation',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('There is a code utilized to download these files?');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide some information of how using the application! (Required)',
        name: 'Usage',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please provide some information of how using the application!');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Tyoe of license(s) for this project?',
        name: 'License',
        choices: ["MIT", "Apache-2.0", "Creative Commons 1.0", "GPLv3", "WTFPL"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Tyoe of license(s) for this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What badges did you want to add to this project? (Copy them into the input)',
        name: 'Badges',
        default: '![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)',
        validate: badgesInput => {
            if (badgesInput) {
                return true;
            } else {
                console.log('Tyoe of Badges for this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Can someone contribute on the Project?',
        name: 'Contributing',
        default: 'For anyone who wishes to contribute you can contact me with at jorgeebn16@gmail.com',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Tyoe of Badges for this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How to test this application?',
        name: 'Test',
        default: 'Run the javascript file in node and check for lines in which the function is not currently running. Once this is finished run your code once again to verify if there are any other issues recurring. ',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('How to test this application?');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a link to your deployed application.',
        name: 'deployment',
        validate: deployInput => {
            if (deployInput) {
                return true;
            } else {
                console.log('Please provide a link to your deployed application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a link for your screenshot. (Required)',
        name: 'Screenshot',
        validate: screenshotInput => {
            if (screenshotInput) {
                return true;
            } else {
                console.log('Please provide a link for your screenshot!')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide alt text for your screenshot. (Optional)',
        name: 'altscreenshotInput'
    },
    {
        type: 'input',
        message: 'Please provide a description of your screenshot. (Optional)',
        name: 'screenshotDescInput'
    },  
];

// function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(`./dist/${fileName}`, data, err => {
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