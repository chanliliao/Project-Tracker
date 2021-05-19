import express from 'express';
const router = express.Router();
import { getLogs, deleteLog, createLog } from '../controllers/logController.js';

router.route('/').get(getLogs).post(createLog);
router.route('/:id').delete(deleteLog);

export default router;
