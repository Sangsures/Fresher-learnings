import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const PORT = 5000; // Port 5000 to match frontend Axios requests

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'expense_tracker',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Get all transactions
app.get('/transactions', (req, res) => {
  db.query('SELECT * FROM transactions', (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching transactions');
    }
    res.json(results);
  });
});

// Add new transaction
app.post('/transactions', (req, res) => {
  const { title, amount } = req.body;
  db.query('INSERT INTO transactions (title, amount) VALUES (?, ?)', [title, amount], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding transaction');
    }
    res.json({ id: result.insertId, title, amount });
  });
});

// Delete transaction by ID
app.delete('/transactions/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM transactions WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting transaction');
    }
    res.sendStatus(200);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
