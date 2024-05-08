
import express from 'express';
import * as yesController from '../controllers/yesController.mjs';

export const router = express.Router();

router.get('/track/:name', yesController.track );
router.get('/content', yesController.content );