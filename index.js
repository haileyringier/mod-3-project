import {homePage, characterForm} from './pages/home.js'
import {charactersPage} from './pages/characters.js'
import {housesPage} from './pages/houses.js'
import {gryffindorPage} from './pages/gryffindor.js'
import {slytherinPage} from './pages/slytherin.js'
import {hufflepuffPage} from './pages/hufflepuff.js'
import {ravenclawPage} from './pages/ravenclaw.js'
import {sortingHatPage, sortingButton} from './pages/sortinghat.js'


const pageName = document.querySelector('#page')
const routes = {
    '/': homePage,
    '/houses': housesPage,
    '/characters': charactersPage,
    '/gryffindor': gryffindorPage,
    '/ravenclaw': ravenclawPage,
    '/slytherin': slytherinPage,
    '/hufflepuff': hufflepuffPage,
    '/sortinghat': sortingHatPage
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

    characterForm.style.display = 'none'
    sortingButton.style.display = 'none'

}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export {router} 