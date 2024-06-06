const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSetSchema = new Schema({
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
