import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Buckets api' }));

app.use('/api/buckets', require('./routes/buckets'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
