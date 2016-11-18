var express = require('express')
var app = express()

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

var profiles = [{
    id: 1,
    name: 'John',
    profession: 'UX specialist',
    hobbies: ['painting', 'travelling']
}, {
    id: 2,
    name: 'Jane',
    profession: 'Developer',
    hobbies: ['problem-solving', 'stamps']
}]


app.get('/profiles', (req, res) => {
    res.json(profiles)
})

app.listen(3000, () => console.log('listening'))
