// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
      {
        message: 'What is your first and last name?',
        name: 'userName'
      },
      {
        message: 'What is the year?',
        name: 'year'
      },
      { //title added with #
        message: 'What is the title of your application?',
        name: 'title',
        type: 'input',
        default: 'Untitled'
      },
      { //description
        message: 'What is the description of your application?',
        name: 'description',
        type: 'input',
        default: 'Application Description'
      },
      { //installation instructions
        message: 'What are the Installation instructions for your application?',
        name: 'install',
        type: 'input',
        default: 'Installation Instructions'
      },
      { //usage info (add video / screen shots)
        message: 'What instructions or examples would you like to provide users to aid in the use of your application? If so, please provide URL to videos or screenshots.',
        name: 'usage',
        type: 'input' // input for written instructions, but is there a way to link a video or screenshot?
      },
      { //contribution guidlines
        message: 'Please list any guidlines for contributors.',
        name: 'contributions',
        type: 'input'
    },
      { //tests
        message: 'Please submit any tests you have completed for this application.',
        name: 'tests',
        type: 'input'
    },
    {
        message: 'Please submit any credits necessary for the development of your application.',
        name: 'credits'
    },
      {  /* license THEN a badge for that license is added near the top of the README and a notice is 
        added to the section of the README entitled License that explains which license the application is covered under */
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
      { /* enter GitHub username THEN this is added to the section of the README entitled Questions, 
        with a link to my GitHub profile */
        message: 'Enter your GitHub username.',
        name: 'github',
        type: 'input',
        //adds username to end of 'https://github.com/'
      },
      { //enter email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        message: 'Enter your email address.',
        name: 'email',
        type: 'input',
        //adds email to end of 'Please reach out to the development team with questions at:'
      }
];
//{userName, year, title, description, install, usage, contributions, tests, license, github, email }

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.info("README.md written to file.")
);
}

// TODO: Create a function to initialize app //calls writeToFile....
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
