

function sortingHatPage () {
    const main = document.querySelector('main')
    const sortingButton = document.createElement('button')
    sortingButton.id="sorting-button"
    sortingButton.innerText = "Sorting Hat"
    main.append(sortingButton)

    sortingButton.addEventListener('click', sortingHat)
    
    return (`
    <h1 id="name-of-page">Sorting Hat</h1>
    <p id="prompt">Click to see what house you belong to</p>
    <p id="house-results"></p>
    `)
}


function sortingHat(){
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    const randomHouse = houses[Math.floor(Math.random()*houses.length)]
    const results = document.getElementById('house-results')
    console.log(randomHouse)

    results.innerText = `${randomHouse}`
}

// function sortingHatGame(){
//     console.log('hmm where to put you')
// }

// const quizContainer = document.getElementById('sorting-quiz')
// const resultsContainer =document.getElementById('sorting-results')
// const submitButton = document.getElementById('sorting-submit')
// submitButton.addEventListener('click', showResults)

// function buildQuiz(){
// }
// function showResults(){
// }

export {sortingHatPage}