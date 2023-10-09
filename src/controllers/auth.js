const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autorização não fornecido.' });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido.' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;