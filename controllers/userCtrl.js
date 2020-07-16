const express = require('express')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const router = express.Router()
const User = require('../models/Resource')

// For testing layout
// This shows user network
router.get('/', (req, res) => {
    res.render('user/index');
  })
  
  // This shows user profile
  router.get('/show', (req, res) => {
    res.render('user/show');
  })

router.get('/new', (req, res) => {
    res.render('user/new');
})

  



module.exports = router