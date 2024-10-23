const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

module.exports = async () => {
  try {
    await mongoose.connect(mongoURI, {
      // The following options are no longer needed for Mongoose v6 and later
      // useNewUrlParser: true, 
      //useUnifiedTopology: true // This remains recommended
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
