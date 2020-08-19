const characterCardContainer = document.querySelector('#card-container')

function gryffindorPage(){
    characterCardContainer.innerHTML = `<div id="card-container"></div>`
    renderCharacters()
    return (`
        <h1 id="name-of-page">Gryffindor</h1>
    `)
    }

const charactersUrl = 'http://localhost:3000/characters'

function renderCharacters(){
    fetch(charactersUrl)
        .then(response => response.json())
        .then(characters => createCharacterCards(characters))
}

function createCharacterCards(characters){
    characters.forEach(character => {
        if (character.house == 'Gryffindor') {

            const card = document.createElement('card')
            const name = document.createElement('h2')
            const picture = document.createElement('img')
            const house = document.createElement('h3')
    
            card.className = 'character-cards'
            picture.className = 'pictures'
            name.innerText = character.name
            picture.src = character.image
            house.innerText = `House: ${character.house}`
    
            card.append(name, picture, house)
            characterCardContainer.appendChild(card)
        }
    })
}

export {gryffindorPage}