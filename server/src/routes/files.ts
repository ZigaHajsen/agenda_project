import express from 'express';
import { uploadFile } from '../controllers/files';

const router = express.Router({ mergeParams: true });

router.route('/').post(uploadFile);

export = router;
