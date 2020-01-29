const express = require("express")
const app = express()
const articleRoutes = require('./routes/articles')



// const blogController = require('./controllers/blogControllers')

const { config, engine } = require('express-edge');
 
// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);


/**
 * Setup static dir
 * 
 */

app.use(express.static('public'))





app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(articleRoutes)



app.all("*", (req, res)=>{
    res.render("pages.404")
})
let port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log('Server working with at http://localhost:',port)
    
})