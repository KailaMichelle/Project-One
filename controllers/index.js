// !routes not followed by anything
// dashboard + home page
const express = require('express')
// * pull in the auth.middleware (deconstruct way)
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// whenever to use middleware in a route add it as a second argument
const router = express.Router()
const Resource = require('../models/Resource')

router.get('/', ensureGuest, (req, res) => {
  res.render('index')
})

//TODO from main page
// DashBoard Route : GET
router.get('/login', ensureAuth, (req, res) => {
  //(dashboard)should be after log in
  console.log(req.user)
  res.render('login', {
    name: req.user.firstName
  })
})
//TODO  /resources
router.get('/resource', ensureAuth, async (req, res) => {
  try {
    const resources = await Resource.find({ user: req.user.id })
    res.render('resource', {
      name: req.user.firstName,
      resources
    })
  } catch (err) {
    console.error(err)
    // if something goes wrong
    res.render('error/500')
  }
})

//TODO user/index.ejs
//TODO  contacts

module.exports = router
