const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');
const auth = require('../middleware/auth');

// Create a new flashcard
router.post('/', auth, async (req, res) => {
  try {
    const flashcard = new Flashcard(req.body);
    await flashcard.save();
    res.status(201).send(flashcard);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all flashcards
router.get('/', auth, async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).send(flashcards);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific flashcard by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) {
      return res.status(404).send();
    }
    res.status(200).send(flashcard);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
