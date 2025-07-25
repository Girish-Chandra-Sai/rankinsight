require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collegeRoutes = require('./routes/collegeRoutes');
const iitRoutes = require('./routes/iitRoutes');
const nitRoutes = require('./routes/nitRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/colleges', collegeRoutes);

app.use('/iit', iitRoutes);
app.use('/nit', nitRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
    console.error('❗ Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit on failure
});


console.log("hio");



app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
