function ravenclawPage(){
    
    renderCharacters()
    return (`
        <h1 id="house-name">Ravenclaw</h1>
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
   console.log("render characters triggered")
    characters.forEach(character => {
        if (character.house == "Ravenclaw") {

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

export {ravenclawPage}