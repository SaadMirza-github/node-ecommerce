const jwt = require('jsonwebtoken');

// Example authentication middleware (JWT-based)
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Remove 'Bearer ' from the token string
  const tokenPart = token.replace('Bearer ', '');
  //tokenPart = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzA3YTQ4ZDgzY2JkNzYxMTdlNWRkZTAiLCJpYXQiOjE3Mjg2NDQ5NjcsImV4cCI6MTcyODY0ODU2N30.OwOjflz0wnNrpe_Vjpw3eifC37hYKg1ofdzUNaaMb_E";
  if (!tokenPart) {
    return res.status(401).json({ message: 'Token format is invalid' });
  }

  try {
    const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET); // Verify the token with the secret
    req.user = decoded;  // Attach decoded token data to request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
