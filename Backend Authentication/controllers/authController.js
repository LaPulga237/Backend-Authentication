const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, address, password, dob } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    User.createUser({ first_name, last_name, email, phone, address, password: hashedPassword, dob }, (err, result) => {
      if (err) {
  console.error('Registration error:', err); 
  return res.status(500).json({ error: err.message || 'Unknown error during registration' });
}
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, async (err, results) => {
    if (err) {
  console.error('Login error:', err);
  return res.status(500).json({ error: err.message || 'Unknown error during login' });
}

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Login successful', token });
  });
};
 




exports.getUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};