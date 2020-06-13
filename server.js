
var express = require('express')
var app =express()

app.use(express.static(__dirname))

var messages = [
    {name: 'Tim', message:'Hi'},
    {name:'Horton', message:'Hello'}

]


app.get('/messages', (req,res) => {
    
    res.send(messages)
})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})

