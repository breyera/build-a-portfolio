var inquirer = require('inquirer');

let main = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location'
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin'
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Enter a short bio for yourself',
            name: 'bio'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your phone number?',
            name: 'phone'
        }
    ])
        const { name, location, linkedin, github, bio, email, phone } = answers;
        const htmlPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${ name } Porfolio</title>
            <script src="https://kit.fontawesome.com/25a8fa6242.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
            <main class="container">
                <div class="content">
                    <h1 class="name">${ name }</h1>
                    <p class="location">${ location }</p>
                    <p><i class="fab fa-linkedin"> &nbsp; <a class="linkedin" href="${linkedin}">${ linkedin }</a></i></p>
                    <p><i class="fab fa-github"> &nbsp; <a class="github" href="${github}">${ github }</a></i></p>
                    <p class="bio">${ bio }</p>
                    <p><i class="fas fa-envelope"> &nbsp; <a class="email" href="mailto:${email}">${ email }</a></i></p>
                    <p class="phone"><i class="fas fa-phone"> &nbsp; ${ phone }</i></p>
                </div>
            </main>
        </body>
        </html>
        `;
        const fs = require('fs');
        fs.writeFile('./index.html', htmlPage, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Stored Successfully');
            }
        });
}
 main();