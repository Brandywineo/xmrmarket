const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to XMR Market!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
