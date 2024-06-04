const express = require('express');
const router = express.Router();
const CardSet = require('../models/CardSet');
const auth = require('../middleware/auth');

// Create a new card set
router.post('/', auth, async (req, res) => {
  try {
    const cardSet = new CardSet({ ...req.body, user: req.user._id });
    await cardSet.save();
    res.status(201).send(cardSet);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all card sets
router.get('/', auth, async (req, res) => {
  try {
    const cardSets = await CardSet.find({ user: req.user._id }).populate('flashcards');
    res.status(200).send(cardSets);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific card set by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const cardSet = await CardSet.findOne({ _id: req.params.id, user: req.user._id }).populate('flashcards');
    if (!cardSet) {
      return res.status(404).send();
    }
    res.status(200).send(cardSet);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
