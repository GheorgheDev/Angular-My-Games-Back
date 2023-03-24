import express from 'express';
import { cryptoController } from '../controllers/crypto.controller';

const router = express.Router();

router.get('/get/all/:id', cryptoController.getAllCryptosWithUserCryptos);

export default router;