import { Request, Response, NextFunction } from 'express';

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
  try {
  } catch (err) {}
};
