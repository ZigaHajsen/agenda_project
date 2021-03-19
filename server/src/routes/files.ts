import express from 'express';
import { uploadFile, getFiles, getFile } from '../controllers/files';

const router = express.Router({ mergeParams: true });

router.route('/').post(uploadFile).get(getFiles);
router.route('/:fileId').get(getFile);

export = router;
