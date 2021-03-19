import { Request, Response, NextFunction } from 'express';
import { countReset } from 'node:console';
import File from '../models/File';

// @route     GET /api/buckets/:bucketId/files
// @desc      Get files
// @access    Public
export const getFiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = await File.find({ bucket: req.params.bucketId });

    res.json(files);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @route       GET api/files/:fileId
// @desc        Get a file
// @access      Public
export const getFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = await File.findById(req.params.fileId);
    res.json(file);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @route       DELETE api/files/:fileId
// @desc        Delete file
// @access      Public
export const deleteFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = await File.findById(req.params.fileId);
    await file?.remove();

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @route     POST /api/buckets/:bucketId/files
// @desc      Add file
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
