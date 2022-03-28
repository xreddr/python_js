const express = require ('express');
const app = express();
const http = require("http");
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {

    const url = 'http://127.0.0.1:5000';

    http.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const item = JSON.parse(data);
            console.log(item);
        });
    });
});

app.get('/0/omega', function(req, res) {

    const url = 'http://127.0.0.1:5000/0/omega';

    http.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const item = JSON.parse(data);
            console.log(item);
        });
    });
});



app.listen(5000, function() {
    console.log("Successfully connected to port 5000!");
});
