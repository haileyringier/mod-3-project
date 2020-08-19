import {homePage} from './pages/home.js'
import {charactersPage} from './pages/characters.js'
import {housesPage} from './pages/houses.js'
import {gryffindorPage} from './pages/gryffindor.js'
import {slytherinPage} from './pages/slytherin.js'
import {hufflepuffPage} from './pages/hufflepuff.js'
import {ravenclawPage} from './pages/ravenclaw.js'


const main = document.querySelector('#page')
const routes = {
    '/': homePage,
    '/houses': housesPage,
    '/characters': charactersPage,
    '/gryffindor': gryffindorPage,
    '/ravenclaw': ravenclawPage,
    '/slytherin': slytherinPage,
    '/hufflepuff': hufflepuffPage
}

// const spell = "Lumos!"

function router(event){
    const path = window.location.hash.split("#")[1] || "/"
    const page = routes[path]

    main.innerHTML = page()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export {router} 