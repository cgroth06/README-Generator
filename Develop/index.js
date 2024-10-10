
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of Questions for Application users:
const questions = [
    {
        message: 'What is your first and last name?',
        name: 'userName'
    },
    {
        message: 'What is the year?',
        name: 'year'
    },
    {
        message: 'What is the title of your application?',
        name: 'title',
        type: 'input',
        default: 'Untitled'
    },
    {
        message: 'What is the description of your application?',
        name: 'description',
        type: 'input',
        default: 'Application Description'
    },
    {
        message: 'What are the Installation instructions for your application?',
        name: 'install',
        type: 'input',
        default: 'Installation Instructions'
    },
    {
        message: 'What instructions or examples would you like to provide users to aid in the use of your application? If so, please provide URL to videos or screenshots.',
        name: 'usage',
        type: 'input'
    },
    {
        message: 'Please list any guidlines for contributors.',
        name: 'contributions',
        type: 'input'
    },
    {
        message: 'Please submit any tests you have completed for this application.',
        name: 'tests',
        type: 'input'
    },
    {
        message: 'Please submit any credits necessary for the development of your application.',
        name: 'credits'
    },
    {
        message: 'What license would you like to choose for this application?',
        name: 'license',
        type: 'list',
        choices: [
            {
                name: 'MIT',
                value: 'mit'
            },
            {
                name: 'Apache',
                value: 'apache'
            },
            {
                name: 'Boost',
                value: 'boost'
            }
        ]
    },
    {
        message: 'Enter your GitHub username.',
        name: 'github',
        type: 'input', //adds username to end of 'https://github.com/'

    },
    {
        message: 'Enter your email address.',
        name: 'email',
        type: 'input', //adds email to end of 'Please reach out to the development team with questions at:'

    }
];
//list of array objects {userName, year, title, description, install, usage, contributions, tests, license, github, email }

// Write the ReadMe file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.info("README.md written to file.")
    );
}

//Initialize app, and prompt users with questions, then writeToFile
function init() {
    const fileName = "README.md";
    inquirer.prompt(questions)
        .then((answers) => {
            const readMeContent = generateMarkdown(answers);
            writeToFile(fileName, readMeContent);
        });
}


// Function call to initialize app
init();
