
fetch('http://127.0.0.1:5000')
    .then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log('GET response:');
        console.log(text);
    });

fetch('http://127.0.0.1:5000/0/omega')
    .then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log('GET response:');
        console.log(text);
    });

// Copied from pcx repos js_client

// Request data
var data = {
    service : "service1",
    username : "jelly",
    password : "password"
}

// POST requests
fetch("http://34.42.125.145:8080/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));
