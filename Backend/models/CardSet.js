const mongoose = require('mongoose');

const CardSetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  flashcards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flashcard'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const CardSet = mongoose.model('CardSet', CardSetSchema);

module.exports = CardSet;
