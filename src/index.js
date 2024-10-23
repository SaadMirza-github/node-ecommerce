require('dotenv').config();     // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set('port', process.env.PORT);

require('./config/db')();

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/users', userRoutes);



const port = app.get('port');
app.listen(port, () => {
  console.log(`Server started on port ${port}`);  
});