const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS only for the Dice Roller static site
const allowedOrigins = ['https://nice-ocean-0f4f77210.4.azurestaticapps.net'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS Not Allowed'));
        }
    }
}));

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

// ✅ **Root test route** (Add this)
app.get('/', (req, res) => {
    res.send('Server is running! Use /api/roll-dice to roll the dice.');
});

// RESTful API endpoint for generating a dice roll
app.get('/api/roll-dice', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // 6-sided die roll
    res.json({ roll: diceRoll });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
