// verifyAdmin.js (middleware)

const verifyAdmin = (req, res, next) => {
    try {
      // Assuming req.user contains the authenticated user's details, including the role
      if (req.user && req.user.role.name === 'admin') {
        next(); // User is an admin, proceed to the next middleware
      } else {
        res.status(403).json({ message: 'Access denied. Admins only.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  };
  
  module.exports = verifyAdmin;
  