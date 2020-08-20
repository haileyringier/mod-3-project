
const loginUrl = 'http://localhost:3000/login'
const userUrl = 'http://localhost:3000/users'

// innerHTML = `
//     <form id="login-form">
//         <input id="login-input" type="text" name="username" placeholder="Username">
//         <input id="login-input" type="text" name="password" placeholder="Password">
//         <button id="login-button" type="submit">Login</button>
//     </form>
// `

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', login)

function login(){
    event.preventDefault()

    const loginFormData = new FormData(event.target)

    const username = loginFormData.get('username')
    const password = loginFormData.get('password')
    const userData = {username, password}

    console.log(username, password)

    fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    .then(parseJSON)
    .then(result => localStorage.setItem('token', result.token))
}

function parseJSON () {
    return response.json()
}

document.addEventListener('DOMContentLoaded', function)