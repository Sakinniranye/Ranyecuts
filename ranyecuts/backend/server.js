const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5050;

// Allow all origins (dev only)
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  next();
});

app.post('/api/appointments', (req, res) => {
  console.log('✅ Appointment received:', req.body);
  res.status(200).json({ message: 'Appointment received successfully!' });
});

const fs = require('fs');
const path = require('path');

app.get('/api/timeslots', (req, res) => {
  const date = req.query.date; // expects 'YYYY-MM-DD'
  const slotsPath = path.join(__dirname, 'data', 'timeslots.json');
  let slotsData = {};
  try {
    slotsData = JSON.parse(fs.readFileSync(slotsPath, 'utf-8'));
  } catch (err) {
    console.error("Could not read timeslots.json:", err);
    return res.status(500).json({ error: "No timeslots available." });
  }
  const slots = slotsData[date] || slotsData["default"] || [];
  res.json({ date, slots });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
