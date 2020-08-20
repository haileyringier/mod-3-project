
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
        const deleteButton = document.createElement('button')
    
        card.className = 'character-cards'
        card.id = character.id
        picture.className = 'pictures'
        name.innerText = character.name
        picture.src = character.image
        ancestry.innerText = `Ancestry: ${character.ancestry}`
        house.innerText = `House: ${character.house}`
        deleteButton.innerText = "X"

        deleteButton.addEventListener('click', (event) => deleteCharacter(event, character.id))

        card.append(name, deleteButton, picture, house, ancestry)
        characterCardContainer.appendChild(card)
    })
}

function deleteCharacter(event, id){
    // const characterId = event.target.parentNode.id
    console.log(id)
    console.log(event)
    console.log(event.target.parentNode)
    event.target.parentNode.remove()

    fetch(`http://localhost:3000/characters/${id}`, {
        method: 'DELETE'
    })
}

export {charactersPage}