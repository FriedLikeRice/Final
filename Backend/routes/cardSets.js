const express = require('express');
const router = express.Router();
const CardSet = require('../models/CardSet');
const Flashcard = require('../models/Flashcard');

// Create a new card set
router.post('/', async (req, res) => {
  try {
    const cardSet = new CardSet(req.body);
    await cardSet.save();
    res.status(201).send(cardSet);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all card sets
router.get('/', async (req, res) => {
  try {
    const cardSets = await CardSet.find().populate('flashcards');
    res.status(200).send(cardSets);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific card set by ID
router.get('/:id', async (req, res) => {
  try {
    const cardSet = await CardSet.findById(req.params.id).populate('flashcards');
    if (!cardSet) {
      return res.status(404).send();
    }
    res.status(200).send(cardSet);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
