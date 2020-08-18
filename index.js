import {homePage} from './pages/home.js'
import {charactersPage} from './pages/characters.js'
import {housesPage} from './pages/houses.js'


const main = document.querySelector('#page')
const routes = {
    '/': homePage,
    '/houses': housesPage,
    '/characters': charactersPage
}

function router(event){
    const path = window.location.hash.split("#")[1] || "/"
    const page = routes[path]

    main.innerHTML = page()

    // if(page){
    //     main.innerHTML = page()
    // } 
    // else {
    //     main.innerHTML = `
    //     <section>
    //         <h1>ERROR</h1>
    //     </section>
    // `
    // }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export {router} 