const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Remove 'Bearer ' from the token string
  const tokenPart = token.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET); // Verify the token with the secret

    // Fetch the full user details including role from the database
    const user = await User.findById(decoded.userId).populate('role', 'name'); // Populate role

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user; // Attach the full user object with role to the request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
