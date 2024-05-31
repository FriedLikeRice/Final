const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
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
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Flashcard = mongoose.model('Flashcard', FlashcardSchema);

module.exports = Flashcard;
