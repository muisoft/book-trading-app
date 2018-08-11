const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Book = require('mongoose').model('Book');
 
module.exports = {
  saveBook(req, res) {
    let { title, author, url, owner } = req.body;

    let book = new Book({ title: title, author: author, url: url, owner: owner });
    book.save((err, saved) => {
      if (err) console.error(err);
      res.json({ status: true });
    })
  },
  allBooks(req, res) {
    Book.find({}, (err, books) => {
      res.json(books);
    })
  },
  myBooks(req, res) {
    let { _id } = req.user;

    Book.find({ owner: _id }, (err, books) => {
      if(err) console.error(err);
      res.json(books);
    })
  },
  signup(req, res) {
    let { username, email, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
      if (user) {
        console.log('Username already exists');
        res.json({ message: 'Username already exists' })
      } else {
        let newUser = new User({ username, email, password });
        newUser.save((err, user) => {  
          res.json(user);
        });
      }
    });
  },
  requestBook(req, res) {
    let { id, requestBy } = req.body;

    Book.findOneAndUpdate(
      { _id: id },
      { requestBy: requestBy, request: true },
      { upsert: 'true' }, (err, book) => {
        if (err) console.error(err);
        res.json({ status: true });
      })
  },
  myRequest(req, res) {
    Book.find({ requestBy: req.user._id, approved: false }, (err, books) => {
      if (err) console.error(err);
      res.json(books);
    });
  },
  cancelRequest(req, res) {
    let { bookId, userId } = req.body;

    Book.findOneAndUpdate(
      { _id: bookId, requestBy: userId },
      { requestBy: mongoose.Schema.Types.ObjectId(""), request: false },
      { upsert: 'true' }, (err, book) => {
        if (err) console.error(err);
        res.json({ status: true });
      })
  },
  requestForMe(req, res) {
    Book.find({ owner: req.user._id, request: true, approved: false }, (err, books) => {
      if (err) console.error(err);
      res.json(books);
    })
  },
  approvedRequest(req, res) {
    let { bookId } = req.body;

    Book.findOneAndUpdate(
      { _id: bookId, owner: req.user._id, request: true },
      { approved: true }, (err, books) => {
        if (err) console.error(err);
        res.json({ status: true });
      })
  },
  borrowedBook(req, res) {
    Book.find({ requestBy: req.user._id, request: true, approved: true }, (err, books) => {
      if (err) console.error(err);
      res.json(books);
    })
  },
  returnBook(req, res) {
    let { bookId } = req.body;

    Book.findOneAndUpdate(
      { _id: bookId, requestBy: req.user._id, request: true, approved: true },
      { requestBy: mongoose.Schema.Types.ObjectId(""), request: false, approved: false },
      (err, books) => {
        if (err) console.error(err);
        res.json(books);
      })
  },
  deleteBook(req, res) {
    let { bookId } = req.body;

    Book.findOneAndRemove({ _id: bookId }, (book) => {
      res.json({ status: true });
    })
  },
  updateProfile(req, res) {
    let { fullname, city, state } = req.body;

    User.findOneAndUpdate(
      { _id: req.user._id },
      { fullname: fullname, city: city, state: state },
      { upsert: 'true' }, (user) => {
        res.json(user);
      })
  },
  updatePassword(req, res) {
    let { password, newPassword } = req.body;
    
    User.findOneAndUpdate(
      { password: password },
      { password: newPassword },
      { upsert: 'true' }, (user) => {
      res.json({ status: true });
    })
  }
}