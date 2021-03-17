import { Request, Response, NextFunction } from 'express';
import Bucket, { IBucket } from '../models/Bucket';

// @route       GET api/buckets
// @desc        Get all buckets
// @access      Public
export const getBuckets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('Get all buckets');
};

// @route       POST api/buckets
// @desc        Get all buckets
// @access      Public
export const createBucket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, location } = req.body;

  try {
    const newBucket = new Bucket({ name, location });

    const bucket = await newBucket.save();

    res.json(bucket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
