
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