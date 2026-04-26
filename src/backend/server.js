const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// In-memory stores (replace with DB in next iteration)
const guests = [];
const tasks = [];
const budget = [];

app.get('/', (req, res) => res.send('Birthday Planner API'));

// Guests
app.get('/guests', (req, res) => res.json(guests));
app.post('/guests', (req, res) => {
  const g = req.body;
  g.id = guests.length + 1;
  guests.push(g);
  res.status(201).json(g);
});

// Tasks
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const t = req.body;
  t.id = tasks.length + 1;
  tasks.push(t);
  res.status(201).json(t);
});

app.listen(port, () => console.log(`Server listening on ${port}`));
