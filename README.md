# Riddikulus
> Mod 3 Project with Flatiron SE Program in Denver

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Contact](#contact)
* [License](#license)

## General info
Riddikulus is a full-stack application that allows the user to explore the characters of the fictional world of Hogwarts! A user can view all the characters in the database on the characters page or view characters by their associated Hogwarts house. This is a single page web appliation, meaning that the page does not need to be reloaded for new content to be rendered.


## Intro Video
[Mod 3 Presentation on Youtube](https://youtu.be/VAVgHlKsICs)

## Technologies
* Ruby - version 2.6.1
* ActiveRecord - version 6.0
* Rails API version 6.0.3
* Sinatra - version 2.0
* Sinatra-activerecord - version 2.0
* SQLite3 - version 1.4
* JSON - version 2.3
* Rest-Client - version 2.1
* HTML5
* CSS
* JavaScript

## Setup
To have full access to all the features in this application: 
1. Clone both the frontend (https://github.com/haileyringier/mod-3-project-frontend) and the backend (https://github.com/haileyringier/mod-3-project-backend) GitHub repositories locally to your computer
1. In the command line, navigate to the root directory of this repository, and enter the following: 
  $ bundle install 
1. In the command of the backend directory, run: 
  $ rails db:migrate
  $ rails db:seed
1. Now save all files, on Windows: (start + alt + s), on Macs: (command + alt +s)
1. In the command of the backend directory, run:
    $ rails s 
    $ this will start your backend server
1. Now in the command of the frontend directory, run:
    $ lite-server
    $ this should automatically open a new broswer with the web application on it.

## Code Examples
```javaScript
    function characterFormData(form){
        const formData = new FormData(form)
        const characterName = formData.get('name')
        const characterHouse = formData.get('house')
        const characterAncestry = formData.get('ancestry')
        const characterImage = formData.get('image')
        const body = {
            name: characterName,
            house: characterHouse,
            ancestry: characterAncestry,
            image: characterImage
        }
        createCharacterCards(body)
        fetch(charactersUrl, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(body)
        })

        alert("Character has been added! Go to the Characters page to view all characters.")
        form.reset()
    }
```

```javascript
    function sortingHat(){
        const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
        const randomHouse = houses[Math.floor(Math.random()*houses.length)]
        const results = document.getElementById('house-results')

        results.innerText = `You belong in ${randomHouse}!`
    }
```

## Features
* View all characters in the database
* Easily navigate through the application with intuitive links
* Add a new character to the database
* View characters by their associated Hogwarts house 
* Find out which House you belong in

## Status
Project is: finished with option to add login feature using Auth and JWT


## Contact
Created by [Hailey Ringier](https://www.linkedin.com/in/hailey-ringier/) 

Feel free to contact me! 

## License
[Click to view]()