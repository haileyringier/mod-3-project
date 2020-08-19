
// import {spell} from '../index.js'

function charactersPage(){
    
    renderCharacters()
    }

const charactersUrl = 'http://hp-api.herokuapp.com/api/characters'    
const characterCardContainer = document.querySelector('#card-container')

function renderCharacters(){
    fetch(charactersUrl)
        .then(response => response.json())
        .then(characters => createCharacterCards(characters))
}

function createCharacterCards(characters){
    characters.forEach(character => {
        const card = document.createElement('card')
        const name = document.createElement('h2')
        const picture = document.createElement('img')
        const house = document.createElement('h3')
        const patronus = document.createElement('p')

        card.className = 'character-cards'
        name.innerText = character.name
        picture.src = character.image
        house.innerText = `House: ${character.house}`
        patronus.innerText = `Patronus: ${character.patronus}`

        card.append(name, picture, house)
        characterCardContainer.appendChild(card)
    })
}


export {charactersPage}