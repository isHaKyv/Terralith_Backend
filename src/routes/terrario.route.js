// /routes/terrario.route.js
import { Router } from 'express';
import { createTerrario, getTerrarios } from '../controllers/terrario.controller.js';

const router = Router();

router.post('/', createTerrario);
router.get('/', getTerrarios);

export default router;
