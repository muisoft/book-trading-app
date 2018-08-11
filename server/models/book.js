const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    url: String,
    author: String,
    request: { type: Boolean, default: false},
    requestBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    approved: {type: Boolean, default: false},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Book', BookSchema);
