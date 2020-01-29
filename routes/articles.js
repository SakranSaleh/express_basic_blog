 const express = require('express')
 const Router = express.Router()
const {articleList} = require('../controllers/pa')


Router.get('/articles', articleList)

 module.exports = Router 