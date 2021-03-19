import express from 'express';
import {
  getBuckets,
  getBucket,
  deleteBucket,
  createBucket,
} from '../controllers/buckets';

const fileRouter = require('./files');

const router = express.Router();

router.use('/:bucketId/files', fileRouter);

router.route('/').get(getBuckets).post(createBucket);
router.route('/:bucketId').get(getBucket).delete(deleteBucket);

export = router;
