import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/budget-app')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
// Define your routes here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});