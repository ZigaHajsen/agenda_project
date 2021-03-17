import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

connectDB();

const buckets = require('./routes/buckets');

const app = express();

app.use(express.json());

app.use('/api/buckets', buckets);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
