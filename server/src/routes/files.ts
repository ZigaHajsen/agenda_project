import express from 'express';
import { uploadFile, getFiles } from '../controllers/files';

const router = express.Router({ mergeParams: true });

router.route('/').post(uploadFile).get(getFiles);

export = router;
