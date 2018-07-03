const mongoose = require('mongoose');
//mongoose.connect(process.env.DB_CONN);//'mongodb://localhost:27017/booktrading');

const BookSchema = new mongoose.Schema({
    name: String,
    url: String,
    author: String,
    request: { type: Boolean, default: false},
    requestBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    approved: {type: Boolean, default: false},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Book', BookSchema);
