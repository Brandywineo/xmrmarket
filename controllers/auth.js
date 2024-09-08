const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send('User created successfully!');
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send('Invalid username or password');
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: '1h'
  });
  res.send({ token });
};

module.exports = { register, login };
