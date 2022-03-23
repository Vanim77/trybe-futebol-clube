import { Router } from 'express';
import clubsRouter from './clubs';
import loginRoutes from './login';

const router = Router();

router.use(loginRoutes);
router.use(clubsRouter);

export default router;
