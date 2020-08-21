const sortingButton = document.createElement('button')

function sortingHatPage () {
    const main = document.querySelector('main')
    sortingButton.id="sorting-button"
    sortingButton.style.display = 'block'
    sortingButton.innerText = "Sorting Hat"
    main.append(sortingButton)

    sortingButton.addEventListener('click', sortingHat)
    
    return (`
    <h1 id="name-of-page">Sorting Hat</h1>
    <p id="prompt">Click to see what house you belong to!</p>
    <p id="house-results"></p>
    `)
}

function sortingHat(){
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    const randomHouse = houses[Math.floor(Math.random()*houses.length)]
    const results = document.getElementById('house-results')

    results.innerText = `You belong in ${randomHouse}!`
}

export {sortingHatPage, sortingButton}