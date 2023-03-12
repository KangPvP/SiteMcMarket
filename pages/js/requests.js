const url = 'http://127.0.0.1:8080/'

async function login(email, password) {

    const formData = {"email": email, "password": password}
    console.log(formData)

    let request = await fetch(url + 'users/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    
    return request
}


async function register(pseudo, email, password) {
    const formData = { "pseudo": pseudo, "email": email, "password": password}
    console.log(formData)
    
    let request = await fetch(url + 'users/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    return request
}

async function codeVerif(code) {
    let request = await fetch(url + 'users/code', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
}
