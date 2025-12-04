const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI (password @ is URL-encoded as %40)
const MONGODB_URI = 'mongodb+srv://vijaymanda323_db_user:Vijay%403369@cluster0.xhsvyzy.mongodb.net/?appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

// Import routes
const routes = require('./routes/routes');

// Use routes
app.use('/api', routes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Backend server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
// Listen on all network interfaces (0.0.0.0) to allow access from physical devices
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access from emulator: http://localhost:${PORT}`);
    console.log(`Access from physical device: http://YOUR_COMPUTER_IP:${PORT}`);
    console.log(`API endpoint: http://YOUR_COMPUTER_IP:${PORT}/api`);
});

