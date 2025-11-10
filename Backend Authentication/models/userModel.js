const db = require('../config/db'); 


exports.createUser = (user, callback) => {
  const sql = `INSERT INTO users (first_name, last_name, email, phone, address, password, dob)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [
    user.first_name,
    user.last_name,
    user.email,
    user.phone,
    user.address,
    user.password,
    user.dob
  ], callback);
};


exports.findUserByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};


exports.getAllUsers = (callback) => {
  db.query('SELECT id, first_name, last_name, email, phone, address, dob, created_at FROM users', callback);
};