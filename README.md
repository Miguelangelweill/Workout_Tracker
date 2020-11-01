# Workout Tracker

## License

![Public](https://img.shields.io/badge/license-Public-blue)

## Description

This application will allow users to keep track of all of the excercises of their day, allowing them to be able to see if they reached their daily and weekly goals.
- The database of this application is build with Robo 3t, the way we interacted with the database was by using the mongoose library.
- This is a server side application.

## Main Window

  ![Image Of Project](Develop/public/images/fitnessTracker.jpg)


## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub)

  ## Installation

  - Clone the reposatory into a local file in you're computer.
  - Run "npm i" inside of the terminal.
  - Make sure you have your Robo 3t and MongoDB running on your device.(Mac "homebrew" Windows "bash")
  - Run "node server" for the application to work.

  ## Usage

- This application uses MongoDB as the database to store the information about the workouts that the user has excecuted.
- We use the Mongoose models to enforce a specific schema to be met. Allowing us to have full controll of the information that is being submitted by the user into our database.
- This application allows us to add more workouts to  our day by clicking (New workout) and for and to start a new day (New Workout Day).
 ## Directory 

 ```
├── models
│   ├── index.js
│   └── workout.js
│ 
│── public
│   ├────────────── imgaes
│   │                 └── fitnessTracker.jpg
│   ├──────────── js
│   │              ├─ api.js
│   │              ├─ exercise.js
│   │              ├─ index.js
│   │              ├─ stats.js
│   │              └── workout.js
│   ├───── styleSheet
│   │              ├─style.css
│   │              └── workout.js
│   ├── ecercise.html
│   ├── index.html
│   └── stats.html
│
├── routes
│   ├── apiRoutes.js
│   └── htmlRoutes.js
│
├── seeders
│   └── seed.js
│ 
│
├── .gitignore
│
├── package-lock.json
│
├── package.json   
│
├── server.js
│
└──README.md

```

  ## Constributors

  Miguelangel Weill

  ## Test

  ![Image Of Project](Develop/public/images/fitnessTracker.gif)

  ## Git hub user name

  miguelangelWeill

  ## Repository

![Image of generator](https://avatars2.githubusercontent.com/u/64563531?v=4)

[Git hub profile](https://api.github.com/users/Miguelangelweill)

[This is my Git Hub repository](https://github.com/Miguelangelweill)
