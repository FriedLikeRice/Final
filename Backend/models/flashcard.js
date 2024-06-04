const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true
  },
  back: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  }
});

const Flashcard = mongoose.model('Flashcard', FlashcardSchema);

module.exports = Flashcard;
