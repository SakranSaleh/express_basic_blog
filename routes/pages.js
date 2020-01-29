const express = require('express')
const Router = express.Router()
const {contactPage, servicesPage} = require('../controllers/articleController')


Router.get('/contact', contactPage)
Router.get('/services', servicesPage)

module.exports = Router 