import express from 'express';
import { getBuckets, createBucket } from '../controllers/buckets';

const router = express.Router();

router.get('/', getBuckets);
router.post('/', createBucket);

export = router;
