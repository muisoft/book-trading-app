const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const Book = require('mongoose').model('Book');
const {
  allBooks,
  myBooks,
  signup,
  saveBook,
  requestBook,
  myRequest,
  cancelRequest,
  requestForMe,
  approvedRequest,
  borrowedBook,
  returnBook,
  deleteBook,
  updatePassword,
  updateProfile
} = require('./utils');

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
  allBooks(req, res);
});

router.get('/mybooks', isLoggedIn, (req, res) => {
 myBooks(req, res);
});
router.post('/savebook', isLoggedIn, (req, res) => {
  saveBook(req, res);
});
router.post('/deletebook', isLoggedIn, (req, res) => {
  deleteBook(req, res);
});
router.post('/requestbook', isLoggedIn, (req, res) => {
  requestBook(req, res);
});
router.get('/myrequest', isLoggedIn, (req, res) => {
  myRequest(req, res);
});
router.post('/cancelrequest', isLoggedIn, (req, res) => {
  cancelRequest(req, res);
});
router.get('/requestforme', isLoggedIn, (req, res) => {
  requestForMe(req, res);
});
router.post('/approvedrequest', isLoggedIn, (req, res) => {
  approvedRequest(req, res);
});
router.get('/borrowedbook', isLoggedIn, (req, res) => {
  borrowedBook(req, res);
});
router.post('/returnbook', isLoggedIn, (req, res) => {
  returnBook(req, res);
});
router.post('/updateprofile', isLoggedIn, (req, res) => {
  updateProfile(req, res);
});
router.post('/updatepassword', isLoggedIn, (req, res) => {
  updatePassword(req, res);
});

module.exports = router;
