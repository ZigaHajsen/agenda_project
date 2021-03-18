import { Request, Response, NextFunction } from 'express';
import Bucket from '../models/Bucket';
import File from '../models/File';

// @desc      Add file
// @route     POST /api/buckets/:bucketId/files
// @access    Public
export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.bucket = req.params.bucketId;

  try {
    const file = await File.create(req.body);

    res.json(file);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
