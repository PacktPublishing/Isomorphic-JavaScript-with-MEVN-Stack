import express from 'express';
const router = express.Router();
import * as controller from './tasks-controller';
import * as auth from '../../services/auth-service';

router.post('/task', auth.requireLogin, controller.create);
router.get('/task', auth.requireLogin, controller.index);
router.get('/task/:id', auth.requireLogin, controller.show);
router.put('/task', auth.requireLogin, controller.update);
router.delete('/task/:id', auth.requireLogin, controller.remove);

export default router;