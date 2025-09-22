const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 4000;
const DB = process.env.MONGO_URI ;

mongoose.connect(DB)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(port, () => {
      console.log(`🚀 App running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('❌ DB connection error:', err.message);
  });
