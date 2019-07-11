const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')



const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine','ejs')

const contact=require('./routes/contact');


app.get('/',(req,res)=>{
    res.send('Welcome to homepage')
})

// app.post('/',(req,res)=>{
//     console.log(req.body)

//     db.CONTACTFORM.create(req.body)
//     .then(()=>res.redirect('/'))
//     .catch((err)=> console.log(err))
    
// })
app.use('/contact', contact)


app.listen(3000)