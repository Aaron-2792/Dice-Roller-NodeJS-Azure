const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for the specific client URL
app.use(cors({
    origin: 'https://nice-ocean-0f4f77210.4.azurestaticapps.net'  // Allow the dice roller client domain
}));

// RESTful API endpoint for generating a dice roll
app.get('/api/roll-dice', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // 6-sided die roll
    res.json({ roll: diceRoll });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});