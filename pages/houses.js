// import {router} from './index.js'

function housesPage(){
    // window.location.reload(1)
    return (`
        <h1 id="name-of-page">Houses</h1>
            <ul id="houses-list">
                <li id="house-link"><a class="house-link" href="#/gryffindor">Gryffindor</a></li>
                <li id="house-link"><a class="house-link" href="#/ravenclaw">Ravenclaw</a></li>
                <li id="house-link"><a class="house-link" href="#/slytherin">Slytherin</a></li>
                <li id="house-link"><a class="house-link" href="#/hufflepuff">Hufflepuff</a></li>
            </ul>
        `)
    }


export {housesPage}