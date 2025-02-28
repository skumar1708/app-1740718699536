const express = require('express');
const mongoose = require('mongoose');
const shlokaRoutes = require('./routes/shlokaRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use('/api/shlokas', shlokaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));