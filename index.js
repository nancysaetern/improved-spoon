const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const managerQuestions = [
{
    type: "input",
    message: "Enter the manager's name",
    name: "name"
},
{
    type: "input",
    message: "What is the employee's ID?",
    name: "id"
},
{
    type: "input",
    message: "What is the employee's email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the office number?",
    name: "officeNumber"
},
{
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an Engineer","Add an Intern","Complete my team"],
    name: "options"
}]

const engineerQuestions = [
{
    type: "input",
    message: "Enter the Engineer's name",
    name: "name"
},
{
    type: "input",
    message: "What is the employee's ID?",
    name: "id"
},
{
    type: "input",
    message: "What is the employee's email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the employee's GitHub username?",
    name: "github"
},
{
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an Engineer","Add an Intern","Complete my team"],
    name: "options"
}
]

const internQuestions = [
    {
        type: "input",
        message: "Enter the Intern's name",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What school do they attend?",
        name: "school"
    },
    {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add an Engineer","Add an Intern","Complete my team"],
        name: "options"
    }
]

function managerPrompt() {
    inquirer.prompt(managerQuestions)
    .then(data => {new Manager(data.name,data.id,data.email,data.officeNumber);
    if(data.options === "Add an Engineer"){
            generateManager(data);
            engineerPrompt();
        }else if(data.options === "Add an Intern"){
            generateManager(data);
            internPrompt();
        }else if(data.options === "Complete my team"){
            generateManager(data);
            finishHTML();
            console.log("Your team is complete!")
        }
     })
};


function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
    .then(data => {new Engineer(data.name,data.id,data.email,data.github);
        if(data.options === "Add an Engineer"){
            generateEngineer(data);
            engineerPrompt();
        }else if(data.options === "Add an Intern"){
            generateEngineer(data);
            internPrompt();
        }else if(data.options === "Complete my team"){
            generateEngineer(data);
            finishHTML();
            console.log("Your team is complete!")
        }
    })
};

function internPrompt() {
    inquirer.prompt(internQuestions)
    .then(data => { new Intern(data.name,data.id,data.email,data.school);
        if(data.options === "Add an Engineer"){
            generateIntern(data);
            engineerPrompt();
        }else if(data.options === "Add an Intern"){
            generateIntern(data);
            internPrompt();
        }else if(data.options === "Complete my team"){
            generateIntern(data);
            finishHTML();
            console.log("Your team is complete!")
        }
    })
};

function generateHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    <main id="cards">`;

    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}


function generateManager(data){  
    let generatedCard= 
    `
    <section id="manager">
        <h2>${data.name}</h2>
        <p id="role">Manager</p>
        <p id="item"><b>ID# </b> ${data.id} </p>
        <p id="item"><b>Email: </b><a href="mailto:${data.email}">${data.email}</a></p>
        <p id="item"><b>Office Number: </b>${data.officeNumber}</p>
    </section>
  `
    fs.appendFile("./dist/team.html",generatedCard,(err) => {
        if (err) {
          console.log(err);
        }});
}

function generateEngineer(data){  
    let generatedCard= 
    `
    <section id="engineer">
        <h2>${data.name}</h2>
        <p id="role">Engineer</p>
        <p id="item"><b>ID# </b> ${data.id} </p>
        <p id="item"><b>Email: </b><a href="mailto:${data.email}">${data.email}</a></p>
        <p id="item"><b>GitHub: </b><a href="https://github.com/${data.github}">${data.github}</a></p>
    </section>
  `
  fs.appendFile("./dist/team.html",generatedCard,(err) => {
    if (err) {
      console.log(err);
    }});
}

function generateIntern(data){
    let generatedCard= 
    `
    <section id="intern">
        <h2>${data.name}</h2>
        <p id="role">Intern</p>
        <p id="item"><b>ID# </b>${data.id} </p>
        <p id="item"><b>Email: </b><a href="mailto:${data.email}">${data.email}</a></p>
        <p id="item"><b>School: </b>${data.school}</p>
    </section>
  `
  fs.appendFile("./dist/team.html",generatedCard,(err) => {
    if (err) {
      console.log(err);
    }});
}

function finishHTML(){
    const html = `
    </main>
    <script src="../index.js"></script>
    </body>
    </html>
    `
    fs.appendFile("./dist/team.html",html,(err) => {
        if (err) {
          console.log(err);
        }});
}

generateHtml();
managerPrompt();