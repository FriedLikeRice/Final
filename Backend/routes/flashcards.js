const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

// Create a new flashcard
router.post('/', async (req, res) => {
  try {
    const flashcard = new Flashcard(req.body);
    await flashcard.save();
    res.status(201).send(flashcard);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all flashcards
router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).send(flashcards);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific flashcard by ID
router.get('/:id', async (req, res) => {
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

// Update a flashcard by ID
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['front', 'back', 'category', 'difficulty'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const flashcard = await Flashcard.findById(req.params.id);

    if (!flashcard) {
      return res.status(404).send();
    }

    updates.forEach((update) => (flashcard[update] = req.body[update]));
    await flashcard.save();
    res.status(200).send(flashcard);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a flashcard by ID
router.delete('/:id', async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);

    if (!flashcard) {
      return res.status(404).send();
    }

    res.status(200).send(flashcard);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
