const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const Book = require('mongoose').model('Book');
const { allBooks, myBooks, signup } = require('./utils');
/**import {
    signup,
    savePics, allPics,
    myPics,
    deletePics,
    ratePics
} from './utils';
**/
var router = express.Router();

const redir = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/';

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.redirect(redir);
  }
}

router.get('/signout', (req, res) => {
    req.logout();
    res.json({ success: true});
})

router.get('/auth/twitter', (req, res, next) => {
  return passport.authenticate('twitter-signin')(req, res, next);
})

router.get('/auth/twitter/callback',
      passport.authenticate('twitter-signin', { failureredirect: redir + 'account/login'}),
      (req, res) => {
        res.redirect(redir + 'allbooks')
      })

router.post('/signin', (req, res, next) => {

  return passport.authenticate('local-signin', (err, user) => {
    req.logIn(user, err => {
      return res.json(user);
    })

  })(req, res, next);
});

router.post('/signup', (req, res) => {
  signup(req, res);
})
router.get('/allbooks', (req, res) => {
  console.log('All Books');
  //allBooks(req, res);
  Book.find({}, (err, books) => {
    console.log('Books: '+books);
    res.json(books);
  })
});

router.get('/mybooks', isLoggedIn, (req, res) => {
 myBooks(req, res);
});
/**router.post('/savebooks', isLoggedIn, (req, res) => {
  saveBooks(req, res);
});
router.post('/deletebooks', isLoggedIn, (req, res) => {
  deleteBooks(req, res);
});

router.post('/ratepics', isLoggedIn, (req, res) => {
  ratePics(req, res);
}); **/
module.exports = router;
