import {homePage} from './pages/home.js'
import {charactersPage} from './pages/characters.js'
import {housesPage} from './pages/houses.js'


const main = document.querySelector('#page')
const routes = {
    '/': homePage,
    '/houses': housesPage,
    '/characters': charactersPage
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