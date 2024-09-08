const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost/xmrmarket', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to XMR Market!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
