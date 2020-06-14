
var express = require('express')
var app =express()
var http= require('http').Server(app)
var io = require('socket.io')(http)

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
    io.emit('message',req.body)
    res.sendStatus(200)
})

http.listen(3000, () => {
    console.log("server is listening on port 3000")
})


