// Add your code here

// let submitData = {
//     name: "Melissa",
//     email: "email@gmail.com"
// }

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": 'application/json',
//         "Accept": 'application/json'
//     },
//     body: JSON.stringify(submitData)
// }

// fetch('http://localhost:3000/users', configObj)
//     .then(response => response.json())
//     .then(obj => document.body.textContent = obj.id)
//     .catch(error => document.body.textContent = error.message)

// can also use method above

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify( {
        name,
        email
        } )
    } )
    .then( function ( response ) {
        return response.json()
    } )
    .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
        document.body.innerHTML = error.message
    } )
}