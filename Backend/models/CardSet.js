const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  flashcards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flashcard'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CardSet = mongoose.model('CardSet', CardSetSchema);

module.exports = CardSet;