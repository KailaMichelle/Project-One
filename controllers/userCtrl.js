const express = require('express')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const router = express.Router()
const User = require('../models/User')

// For testing layout
// This shows user network
router.get('/', (req, res) => {
    User.find({}, (err, allUsers) => {
        if (err) return console.log(err);
    
        console.log(allUsers);
    
        res.render('user/index', {
          user: allUsers,
        });
    });
  })

// Show Profile
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, showUser) => {
      if (err) return console.log(err);
  
      res.render('user/show', {
        user: showUser,
      });
    });
  });


router.post('/', (req, res) => {
    User.create(req.body, (err, newUser) => {
      if(err) return console.log(err);
      console.log(newUser);
  
      res.redirect('network');
  });  
});  


module.exports = router