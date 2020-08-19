
// import {spell} from '../index.js'

function charactersPage(){
    renderCharacters()
    return (`
        <h1 id="name-of-page">All Characters</h1>
    `)
}

const charactersUrl = 'http://localhost:3000/characters'
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
        const ancestry = document.createElement('h3')
    
        card.className = 'character-cards'
        picture.className = 'pictures'
        name.innerText = character.name
        picture.src = character.image
        ancestry.innerText = `Ancestry: ${character.ancestry}`
        house.innerText = `House: ${character.house}`

        card.append(name, picture, house, ancestry)
        characterCardContainer.appendChild(card)
    })
}


export {charactersPage}