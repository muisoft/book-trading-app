const bCrypt = require('bcrypt-nodejs');
const User = require('mongoose').model('User');
const Book = require('mongoose').model('Book');
const passport = require('passport');

/**export const isCurrectPassword = (user, password) => {
  return bCrypt.compareSync(password, user.password);
}

export const createHash = (password) => {
  return bCrypt.hashSync(password, genSaltSync(10), null);
}

export const savePics = (req, res) => {
  let { id, title, thumbnail, owner } = req.body;

  Pin.findOne({ owner: id }, (err, p) => {
    User.findOne({ _id: id }, (err, user) => {
      let image;
      if (user.thumbnail) {
        image = user.thumbnail;
      } else if (p) {
        image = p.thumbnail;
      } else {
        image = thumbnail;
      }

      const pin = new Pin({ title, thumbnail, ownerImage: image, owner: id });
      User.findOneAndUpdate({ _id: id }, { thumbnail: image }, (err, update) => {
        pin.save((err, pin) => {
          res.json({ message: owner, user: update });
        });
      });
    })
  })
}**/

exports.allBooks = function(req, res) {
  Book.find({}, (err, books) => {
    console.log('Books: '+books);
    res.json(books);
  })
}

exports.myBooks = (req, res) => {
  var { _id } = req.user;
  console.log('Yewo: '+JSON.stringify(req.user));
  Book.find({ owner: _id }, (err, books) => {
    console.log('Yewo: '+JSON.stringify(books));
    res.json(books);
  })
}

exports.signup = (req, res) => {
  var { username, email, password } = req.body;

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
  })
}

/**export const deletePics = (req, res) => {
  let { id } = req.body;

  Pin.findOneAndRemove({ _id: id }, (pin) => {
    res.json({ success: true });
  });
}
export const ratePics = (req, res) => {
  let { id, rate } = req.body;

  Pin.findOneAndUpdate({ _id: id }, { rate: rate }, (pin) => {
    Pin.find({}, (err, pins) => {
      res.json(pins);
    })
  })
}**/
