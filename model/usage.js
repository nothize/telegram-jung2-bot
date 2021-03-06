'use strict';

var mongoose = require('mongoose');

var UsageSchema = new mongoose.Schema({
  chatId: String,
  notified: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Usage', UsageSchema);
