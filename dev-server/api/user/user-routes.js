import express from 'express';
const router = express.Router();
import * as controller from './user-controller';

router.get('/user', controller.index);

export default router;