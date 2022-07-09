// Add your code here
function submitData(userName, userEmail) {
    // creates new user object in db.json, with name and email from function input
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        })
    })
    .then(resp => resp.json())
    // creates new h1 element and displays new ID on DOM
    .then((user) => {
        let h1 = document.createElement('h1');
        h1.textContent = `The newst userID is: ${user.id}`;
        document.body.appendChild(h1)
    })
    .catch(function(error) {
        alert('Oh no that did not work!');
        let h2 = document.createElement('h2');
        h2.textContent = `Something went wrong! ${error}`;
        document.body.appendChild(h2)
    })
}

function handleDelete(userID) {
    fetch(`http://localhost:3000/users/${userID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(user => console.log(user))
}