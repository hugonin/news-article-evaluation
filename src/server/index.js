require('dotenv').config();

var path = require('path')
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');

/* Global API Variables */
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

const app = express()
app.use(express.static('dist'))

app.use(cors())

// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Post Route
app.post('/add', async function(req, res) {
    textInput = req.body.name;
    console.log(`You entered: ${textInput}`);
   
    const response = await fetch(baseUrl + `${API_KEY}&of=json&lang=en&url=${textInput}`)
    const data = await response.json()
    console.log(data)
    res.send(data)
});


// Setup Server
const port = 8081;
/* Spin up the server*/
const server = app.listen(port, listening);

//Debug
function listening(){
    console.log(`server running`);
    console.log(`Example app listening on port: ${port}`);
} 