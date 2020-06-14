
var express = require('express')
var app =express()
var bodyParser= require('body-parser')

app.use(express.static(__dirname))
app.use(bodyParser.json()) // to convert the data received in json format
app.use(bodyParser.urlencoded({extended:false}))

var messages = [
    {name: 'Tim', message:'Hi'},
    {name:'Horton', message:'Hello'}

]

// get service
app.get('/messages', (req,res) => {
    
    res.send(messages)
})

// post service
app.post('/messages', (req,res) => {
    messages.push(req.body)
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})


