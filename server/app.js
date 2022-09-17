const client = require('./controller/client')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.resolve('./public')));

PORT = process.env.PORT || 4001

app.use('/api/check', require('./routes/check'))
app.use('/api/login', require('./routes/login'))
app.use('/api/signup', require('./routes/signup'))
app.use('/api/forgetpassword', require('./routes/forgetpassword'))
app.use('/api/read', require('./routes/read'))

app.get('api/',(req, res)=>{
    res.send('Hello world')
  })
  
//   app.all('*',( req, res)=>{
//     res.send('Hello there, you seem to be lost on this server')
//   })
app.listen( PORT , ()=>{
    console.log('Connected to the server at port', PORT)
})