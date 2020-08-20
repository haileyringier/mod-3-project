// import {characterForm} from '../index.js'

function homePage(){
    const characterForm = document.getElementById('character-form')
    characterForm.innerHTML = `
            <form id="character-form"> Add a Character
                <input type="text" name="name" placeholder="Name">
                <input name="image" placeholder="Photo url">
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
                <input type="submit" value="Add Character!">
            </form>
    `
    console.log(characterForm)
    characterForm.addEventListener('submit', (event) => {
        event.preventDefault()
        characterFormData(characterForm)
    })

    return (`
        <section id="music">
            <h1 id="name-of-page">Welcome to the wizarding world!</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LgZjI7JRi1I" frameborder="0" allow="accelerometer; autoplay="1"; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        `)
}

const charactersUrl = 'http://localhost:3000/characters'

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


    fetch(charactersUrl, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body)
    })

    alert("Character has been added! Go to the Characters page to view all characters.")
    form.reset()
}


export {homePage}
