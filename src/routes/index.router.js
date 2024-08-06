// /routes/index.js
import { Router } from 'express';
import usersRouter from './user.route.js';
import loguinRouter from './auth.route.js';
import dataRouter from './data.route.js';
import terrarioRouter from './terrario.route.js';

const router = Router();
const prefijo = 'app';

router.use(`/user`, usersRouter);
router.use(`/auth`, loguinRouter);
router.use(`/data`, dataRouter);
router.use(`/terrario`, terrarioRouter); // Nueva ruta para Terrario

export default router;
