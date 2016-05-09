'use strict';

var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  chatId: String,
  chatTitle: String,
  userId: String,
  username: String,
  firstName: String,
  lastName: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

MessageSchema.index({
  chatId: 1,
  userId: 1
});

var msg = mongoose.model('Message', MessageSchema);

module.exports = msg;
