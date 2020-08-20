import {homePage} from './pages/home.js'
import {charactersPage} from './pages/characters.js'
import {housesPage} from './pages/houses.js'
import {gryffindorPage} from './pages/gryffindor.js'
import {slytherinPage} from './pages/slytherin.js'
import {hufflepuffPage} from './pages/hufflepuff.js'
import {ravenclawPage} from './pages/ravenclaw.js'


const pageName = document.querySelector('#page')
// const characterForm = document.getElementById('character-form')
const routes = {
    '/': homePage,
    '/houses': housesPage,
    '/characters': charactersPage,
    '/gryffindor': gryffindorPage,
    '/ravenclaw': ravenclawPage,
    '/slytherin': slytherinPage,
    '/hufflepuff': hufflepuffPage
}


function router(event){
    const path = window.location.hash.split("#")[1] || "/"

    const page = routes[path]

    pageReset()
    pageName.innerHTML = page()
}

function pageReset(){
    const characterCardContainer = document.querySelector('#card-container')
    characterCardContainer.innerHTML = `<div id="card-container"></div>`

    const characterForm = document.getElementById('character-form')
    characterForm.innerHTML =  `<form id="character-form"></form>`
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export {router} 