const express = require('express');
const mongoose = require('mongoose');
const flashcardRoutes = require('./routes/flashcards');
const cardSetRoutes = require('./routes/cardSets');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/cardsets', cardSetRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
