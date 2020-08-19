function gryffindorPage(){
    renderCharacters()
    return (`
        <h1 id="house-name">Gryffindor</h1>
    `)
    }

// const charactersUrl = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor'    
const charactersUrl = 'http://localhost:3000/characters'
const characterCardContainer = document.querySelector('#page')

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
            const patronus = document.createElement('p')
    
            card.className = 'character-cards'
            picture.className = 'pictures'
            name.innerText = character.name
            picture.src = character.image
            house.innerText = `House: ${character.house}`
            patronus.innerText = `Patronus: ${character.patronus}`
    
            card.append(name, picture, house)
            characterCardContainer.appendChild(card)
        }
    })
}

export {gryffindorPage}