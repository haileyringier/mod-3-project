
function homePage(){
    return (`
        <section id="music">
            <h1 id="name-of-page">Welcome to the wizarding world!</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LgZjI7JRi1I" frameborder="0" allow="accelerometer; autoplay="1"; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <form id="character-form"> Add a Character
            <input type="text" name="name" placeholder="Name">
            <input name="house" placeholder="House">
            <input name="ancestry" placeholder="Ancestry">
            <input name="image" placeholder="photo url">
            <input type="submit" value="submit">
        </form>
    `)
}


function addCharacterForm(form){
    event.preventDefault()
    characterForm.addEventListener('submit', () => console.log("HELLO"))
    console.log("ITS WORKING")
}

export {homePage}
// const characterForm = document.getElementById('character-form')
//         characterForm.innerHTML = `
//             <form id="character-form"> Add a Character
//                 <input type="text" name="name" placeholder="Name">
//                 <input name="house" placeholder="House">
//                 <input name="ancestry" placeholder="Ancestry">
//                 <input name="image" placeholder="photo url">
//                 <input type="submit" value="submit">
//             </form>
//         `