import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.get('/get/:email/:password', userController.checkUserExists);
router.get('/get/:id', userController.getUserById);

export default router;