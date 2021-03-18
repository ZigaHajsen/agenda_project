import express from 'express';
import { getBuckets, createBucket } from '../controllers/buckets';

const fileRouter = require('./files');

const router = express.Router();

router.use('/:bucketId/files', fileRouter);

router.route('/').get(getBuckets).post(createBucket);

export = router;
