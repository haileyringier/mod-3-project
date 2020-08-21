const characterForm = document.getElementById('character-form')

function charactersPage(){
    characterForm.style.display = 'block'
    characterForm.innerHTML = `
            <form id="character-form">
                <label>Name</label>
                <input type="text" name="name">
                <label>Photo</label>
                <input name="image">
                <label> House</label>
                <select name="house">
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="None">No Hogwarts Affiliation</option>
                </select>
                <label>Ancestry</label>
                <select name="ancestry">
                    <option value="mudblood">Muggle-born</option>
                    <option value="pureblood">Pure-blood</option>
                    <option value="squib">Squib</option>
                    <option value="half-blood">Half-blood</option>
                    <option value="unknown">Unknown</option>
                </select>
                <input id="submit" type="submit" value="Add Character!">
            </form>
    `
    characterForm.addEventListener('submit', (event) => {
        event.preventDefault()
        characterFormData(characterForm)
    })
    renderCharacters()
    return (`
    <h1 id="name-of-page">All Characters</h1>
    `)
}

const characterCardContainer = document.querySelector('#card-container')
const charactersUrl = 'http://localhost:3000/characters'

function renderCharacters(){
    fetch(charactersUrl)
        .then(response => response.json())
        .then(characters => characters.forEach(character => createCharacterCards(character)))
}

function createCharacterCards(character){
    // characters.forEach(character => {
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
        deleteButton.id = 'delete-button'

        deleteButton.addEventListener('click', (event) => deleteCharacter(event, character.id))

        card.append(deleteButton, name,  picture, house, ancestry)
        characterCardContainer.appendChild(card)
    }
// }

function deleteCharacter(event, id){
    event.target.parentNode.remove()

    fetch(`http://localhost:3000/characters/${id}`, {
        method: 'DELETE'
    })
}

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

export {charactersPage, characterForm}