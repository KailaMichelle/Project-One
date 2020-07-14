const express = require('express')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const router = express.Router()
const Resource = require('../models/Resource')


//TODO  /resources
// router.get('/resource', ensureAuth, async (req, res) => {
//   try {
//     const resources = await Resource.find({ user: req.user.id })
//     res.render('resource', {
//       name: req.user.firstName,
//       resources
//     })
//   } catch (err) {
//     console.error(err)
//     // if something goes wrong
//     res.render('error/500')
//   }
// })

router.get('/resources', (req, res) => {
  Resource.find({}, (err, allResources) => {
    if (err) return console.log(err);

    console.log(allResources);

    res.render('resources/index', {
      resource: allResources,
   });
  });
});

router.get('/resources/new', (req, res) => {
    res.render('resources/new');
  });

// router.get('/resources/:id/edit', (req, res) => {
//     Resource.findById(req.params.id, (err, edit) => {
//       if (err) return console.log(err);

//       res.render('resources/edit', {
//         resource: edit,
//       });
//     });
//   });
  

  
router.post('/resources', (req, res) => {
  
    Resource.create(req.body, (err, newResource) => {
      if(err) return console.log(err);
      console.log(newResource);

      res.redirect('resources');
    });
  });




module.exports = router