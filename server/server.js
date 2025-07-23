require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collegeRoutes = require('./routes/collegeRoutes');
const iitRoutes = require('./routes/iitRoutes');
const nitRoutes = require('./routes/nitRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/colleges', collegeRoutes);

app.use('/iit', iitRoutes);
app.use('/nit', nitRoutes);
const PORT = process.env.PORT ;
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
