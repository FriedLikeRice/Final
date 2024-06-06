const express = require('express');
const mongoose = require('mongoose');
const flashcardRoutes = require('./routes/flashcards');
const cardSetRoutes = require('./routes/cardSets');
const authRoutes = require('./routes/auth');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/cardsets', cardSetRoutes);
app.use('/api/auth', authRoutes);

const MONGODB_URI = 'mongodb+srv://Nimo_moha:Hooyomcn2@cluster0.mn3ocrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB connection
mongoose.connect(MONGODB_URI, {
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